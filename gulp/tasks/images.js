var changed = require('gulp-changed')
		,gulp = require('gulp')
		,imagemin = require('gulp-imagemin')
		,config = require('../config').images
;

gulp.task('images',['templates'], function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(config.dest));
});
