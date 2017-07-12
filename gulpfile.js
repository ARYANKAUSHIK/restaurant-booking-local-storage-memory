var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

gulp.task('server', function() {
    gulp.src(['apps/server/*.js'])
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/server/'));
});

gulp.task('js', function() {
    gulp.src(['apps/public/js/*.js'])
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/public/js/'));
});

gulp.task('cons', function() {
    gulp.src(['constants/*.js'])
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/constants/'));
});

gulp.task('common', function() {
    gulp.src(['common/*.js'])
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/common/'));
});

// minify new images
gulp.task('imagemin', function() {
  var imgSrc = 'img/**/*',
      imgDst = './build/img/';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = 'pages/*.html',
      htmlDst = './build/pages/';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// CSS  and minify
gulp.task('styles', function() {
  gulp.src(['css/*.css'])
   // .pipe(concat('styles.css'))
    //.pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/css/'));
});