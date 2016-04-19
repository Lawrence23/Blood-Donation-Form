var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');

gulp.task('default', ['scripts', 'sass']);

gulp.task('scripts', function() {
  return gulp.src('./assets/scripts/*.js')
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/scripts/'));
});

gulp.task('sass', function() {
  return sass('./assets/sass/*.scss', {style: 'compressed'})
    .pipe(concat('styles.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/css/'));
});

/*gulp.task('compress', function() {
  return gulp.src('./dist/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});
*/