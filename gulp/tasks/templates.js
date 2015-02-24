var gulp = require('gulp')
		,jade = require('gulp-jade')
    ,data = require('gulp-data')
		,config = require('../config').templates
;

gulp.task('templates', function() {

  gulp.src(config.src.all)
    .pipe(data(function(file) {
      return require(config.src.data + 'docs.json');
    }))
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(config.dest))
});