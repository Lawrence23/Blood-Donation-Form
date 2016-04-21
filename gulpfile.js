var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');

gulp.task('default', ['scripts', 'sass', 'watch']);

gulp.task('scripts', function() {
  return gulp.src('./assets/scripts/*.js')
    // .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('sass', function() {
  return sass('./assets/sass/*.scss', {style: 'compressed'})
    .pipe(concat('styles.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('watch', function() {
  	gulp.watch('./assets/sass/*.scss', ['sass']);
  	gulp.watch('./assets/scripts/*.js', ['scripts']);
});