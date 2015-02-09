/* jshint node:true */

'use strict';

var gulp            = require('gulp');

var autoprefixer    = require('gulp-autoprefixer');
var minifyCSS       = require('gulp-minify-css');
var sass            = require('gulp-sass');

gulp.task('styles', function () {
  return gulp.src('source/styles/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['styles']);

gulp.task('default', ['build']);
