const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();


function html() {
  return src('src/*.html').pipe(dest('build/'))
}

function css() {
  return src('client/templates/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('build/css'))
}

function js() {
  return src('client/javascript/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('build/js', { sourcemaps: true }))
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.default = parallel(html, css, js);







const gulp = require('gulp');



gulp.task('styles', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
    }))
    .pipe(clean())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('img', () =>
  gulp.src('./src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/'))
);

gulp.task('js', () =>
  gulp.src('./src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
);

gulp.task('browserSync', () => {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
})

gulp.task('default', gulp.parallel('styles', 'js', 'browserSync', () => {
  gulp.watch('./src/sass/**/*.scss', gulp.series('styles'));
}));