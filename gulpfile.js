const { src, dest, parallel } = require('gulp');
const concat = require("gulp-concat");
const csso = require("gulp-csso");
const uglify = require("gulp-uglify");
const pug = require("gulp-pug");
const stylus = require("gulp-stylus");
const imagemin = require("gulp-imagemin");
const concatCss = require("gulp-concat-css");

function js() {
    return src(["./src/js/*.js"])
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(dest("./out"));
};

function html() {
    return src(["./src/index.pug"])
        .pipe(pug())
        .pipe(dest("./out"));
};

function img() {
    return src("./src/img/site/**")
        .pipe(imagemin())
        .pipe(dest("./out/img/site"));
};

function css() {
    return src(["./src/css/*.styl"])
        .pipe(stylus())
        .pipe(concatCss("main.css"))
        .pipe(csso())
        .pipe(dest("./out"));
}

exports.js = js;
exports.html = html;
exports.img = img;
exports.css = css;
exports.default = parallel(js, html, img, css);