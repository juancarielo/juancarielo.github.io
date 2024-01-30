const { dest, series, src, watch } = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

// Define the source and the destination of the assets.
const paths = {
  styles: ['assets/src/scss/*.scss'],
  scripts: ['assets/src/scripts/*.js'],
  images: ['assets/src/images/**/*.{png,jpeg,jpg}'],
  dest: {
    styles: 'assets/dist/css',
    scripts: 'assets/dist/js',
    images: 'assets/dist/img'
  }
};

function styles() {
  return src(paths.styles)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest(paths.dest.styles));
}

function scripts() {
  return src(paths.scripts)
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest(paths.dest.scripts))
}

function images() {
  return src(paths.images)
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(dest(paths.dest.images))
}

exports.build = series(styles, scripts, images);

exports.default = function () {
  watch(paths.styles, { ignoreInitial: false }, styles);
  watch(paths.scripts, { ignoreInitial: false }, scripts);
  watch(paths.images, { ignoreInitial: false }, images);
};
