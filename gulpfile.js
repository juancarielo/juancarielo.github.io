const { dest, series, src, watch } = require('gulp');
const concat = require('gulp-concat');
const merge = require('merge-stream');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

// Define the source and the destination of the assets
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

// Set the vendors to copy from node_modules
const vendors = [
  '@fortawesome/fontawesome-free',
  '!@fortawesome/fontawesome-free/less',
  '!@fortawesome/fontawesome-free/scss',
  '!@fortawesome/fontawesome-free/js',
  'bootstrap/dist',
  // 'jquery/dist',
];

function styles() {
  return src(paths.styles)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('app.min.css'))
    .pipe(dest(paths.dest.styles));
}

function scripts() {
  return src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(dest(paths.dest.scripts))
}

function images() {
  return src(paths.images)
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(dest(paths.dest.images))
}

// Copy third party libraries from node_modules into vendor
function vendor() {
  return merge(vendors.map(function (vendor) {
    return src('node_modules/' + vendor + '/**/*')
      .pipe(dest('assets/vendor/' + vendor.replace(/\/.*/, '')));
  }));
}

exports.build = series(vendor, styles, scripts, images);

exports.default = function () {
  watch(paths.styles, { ignoreInitial: false }, styles);
  watch(paths.scripts, { ignoreInitial: false }, scripts);
  watch(paths.images, { ignoreInitial: false }, images);
};
