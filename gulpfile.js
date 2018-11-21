var gulp = require('gulp');
var postcss = require('gulp-postcss');
var uncss = require('postcss-uncss');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var csso = require('gulp-csso');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-minify-html');
var rimraf = require('gulp-rimraf');

gulp.task('css1', function() {
   var plugins = [
      uncss({
          html: ['index.html']
      }),
  ];
  return gulp.src(['./css/main.css'])
      .pipe(postcss(plugins))
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

gulp.task('default', gulp.series('html', 'images', 'images2', function() {
   return gulp.src('./out/img/shared/github-512.png', {
         read: true
      })
      .pipe(rimraf());
}));
