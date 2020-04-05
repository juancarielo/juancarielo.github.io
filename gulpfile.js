const { src, dest, watch, series } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const paths = {
  scss: ['assets/vendor/startbootstrap-clean-blog/scss/clean-blog.scss', 'assets/src/scss/**/*.scss'],
  scripts: ['assets/vendor/startbootstrap-clean-blog/js/clean-blog.min.js', 'assets/src/scripts/*.js'],
  images: ['assets/src/images/**/*.{png,jpeg,jpg}'],
  dest: {
    scss: 'assets/dist/css',
    scripts: 'assets/dist/js',
    images: 'assets/dist/img'
  }
};

function scss() {
  return src(paths.scss)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('app.min.css'))
    .pipe(dest(paths.dest.scss));
}

function scripts() {
  return src(paths.scripts, { sourcemaps: true })
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(dest(paths.dest.scripts, { sourcemaps: true }))
}

function images() {
  return src(paths.images)
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(dest(paths.dest.images))
}

// Copy third party libraries from /node_modules into /vendor
function vendor() {
  // Start Bootstrap Clean Blog SCSS
  src([
    './node_modules/startbootstrap-clean-blog/scss/**/*'
  ])
    .pipe(dest('assets/vendor/startbootstrap-clean-blog/scss'));

  // Start Bootstrap Clean Blog JS
  src([
    './node_modules/startbootstrap-clean-blog/js/clean-blog.min.js'
  ])
    .pipe(dest('assets/vendor/startbootstrap-clean-blog/js'));

  // Bootstrap
  src([
    './node_modules/bootstrap/dist/**/*',
    '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
  ])
    .pipe(dest('assets/vendor/bootstrap'));

  // jQuery
  src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
    .pipe(dest('assets/vendor/jquery'))

  // Font Awesome
  src([
    './node_modules/@fortawesome/**/*',
  ])
    .pipe(dest('assets/vendor'))
}

exports.build = series(vendor, scss, scripts, images);

exports.default = function() {
  watch(paths.scss, { ignoreInitial: false }, scss);
  watch(paths.scripts, { ignoreInitial: false }, scripts);
  watch(paths.images, { ignoreInitial: false }, images);
};
