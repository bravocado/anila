var gulp = require('gulp')
    ,sourcemaps = require('gulp-sourcemaps')
    ,sass = require('gulp-sass')
    ,rename = require('gulp-rename')
    ,handleErrors = require('../util/handleErrors')
    ,config = require('../config').sass
;

gulp.task('sass', ['images'], function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
      .pipe(sass({
        cacheLocation: '.sass_cache',
        outputStyle: 'expanded'
      }))
    .pipe(sourcemaps.write('./maps'))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});

gulp.task('sass:compressed', ['sass'], function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
      .pipe(sass({
        cacheLocation: '.sass_cache',
        outputStyle: 'compressed'
      }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(sourcemaps.write('./maps'))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});