var gulp = require('gulp');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-minify-html');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');

gulp.task('stylus', function(){
      return gulp.src(['./css/main.styl'])
            .pipe(stylus())
            .pipe(csso())
            .pipe(gulp.dest('./out'))
});

gulp.task('js', function () {
      return gulp.src(['./js/jquery-1.11.3.min.js', './js/main.js'])
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./out'));
});

gulp.task('html', function () {
      return gulp.src(['index.pug'])
            .pipe(pug({
                  pretty: true
            }))
            .pipe(useref())
            .pipe(htmlmin())
            .pipe(gulp.dest('./out'));
});

gulp.task('images', function () {
      return gulp.src('./img/shared/*')
            .pipe(gulp.dest('./out/img/shared'));
});

gulp.task('images2', function () {
      return gulp.src('./img/shared/favicon/*')
            .pipe(gulp.dest('./out/img/shared/favicon'));
});

gulp.task('page', gulp.series('html', 'stylus', 'js'))

gulp.task('default', gulp.parallel('page', 'images', 'images2'));