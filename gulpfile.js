var gulp = require('gulp');
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var htmlmin = require('gulp-minify-html');
var rimraf = require('gulp-rimraf');
var fs = require('fs');

gulp.task('css1', function() {
   return gulp.src(['./css/bootstrap.css', './css/bootstrap.min.css', './css/bootstrap-theme.css', './css/bootstrap-theme.min.css', './css/main.css'])
      .pipe(uncss({
         html: ['index.html']
      }))
      .pipe(concatCss('main.css'))
      .pipe(csso())
      .pipe(gulp.dest('./out'));
});
gulp.task('js', function() {
   return gulp.src(['./js/npm.js', './js/bootstrap.js', './js/bootstrap.min.js', './js/jquery-1.11.3.min.js', './js/main.js'])
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./out'));
});
gulp.task('html', ['js', 'css1'], function() {
   return gulp.src(['index.html'])
      .pipe(useref())
      .pipe(htmlmin())
      .pipe(gulp.dest('./out'));
});
gulp.task('images', function() {
   return gulp.src('./img/shared/*')
      .pipe(gulp.dest('./out/img/shared'));
});

gulp.task('images2', function() {
   return gulp.src('./img/shared/favicon/*')
      .pipe(gulp.dest('./out/img/shared/favicon'));
});

gulp.task('fonts', function() {
   return gulp.src('./fonts/*')
      .pipe(gulp.dest('./out/fonts/'));
});

gulp.task('default', ['html', 'images', 'fonts', 'images2'], function() {
   return gulp.src('./out/temp.css', {
         read: false
      })
      .pipe(rimraf());
});
