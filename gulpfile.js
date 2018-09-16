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
   return gulp.src(['./css/main.css'])
      .pipe(uncss({
         html: ['index.html']
      }))
      .pipe(concatCss('main.css'))
      .pipe(csso())
      .pipe(gulp.dest('./out'));
});
gulp.task('js', function() {
   return gulp.src(['./js/jquery-1.11.3.min.js', './js/main.js'])
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./out'));
});
gulp.task('html', gulp.series('js', 'css1', function() {
   return gulp.src(['index.html'])
      .pipe(useref())
      .pipe(htmlmin())
      .pipe(gulp.dest('./out'));
}));
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

gulp.task('email', function() {
      return gulp.src('./email/*')
         .pipe(gulp.dest('./out/email/'));
});

gulp.task('misc', function() {
      return gulp.src('.htaccess', 'googleead1d9329524274a.html',)
         .pipe(gulp.dest('./out/'));
});

gulp.task('default', gulp.series('html', 'images', 'fonts', 'images2', 'misc', 'email', function() {
   return gulp.src('./out/img/shared/github-512.png', {
         read: true
      })
      .pipe(rimraf());
}));
