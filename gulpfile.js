var gulp = require("gulp");
var concat = require("gulp-concat");
var csso = require("gulp-csso");
var uglify = require("gulp-uglify");
var htmlmin = require("gulp-minify-html");
var pug = require("gulp-pug");
var stylus = require("gulp-stylus");
var imagemin = require('gulp-imagemin');
var concatCss = require('gulp-concat-css');

gulp.task("stylus", function () {
	return gulp.src(["./css/*.styl"])
		.pipe(stylus())
		.pipe(concatCss("main.css"))
		.pipe(csso())
		.pipe(gulp.dest("./out"));
});

gulp.task("js", function () {
	return gulp.src(["./js/*.js"])
		.pipe(concat("main.js"))
		.pipe(uglify())
		.pipe(gulp.dest("./out"));
});

gulp.task("html", function () {
	return gulp.src(["index.pug"])
		.pipe(pug())
		.pipe(htmlmin())
		.pipe(gulp.dest("./out"));
});

gulp.task("images", function () {
	return gulp.src("./img/site/**")
		.pipe(imagemin())
		.pipe(gulp.dest("./out/img/site"));
});

gulp.task("default", gulp.parallel("images", "html", "stylus", "js"));