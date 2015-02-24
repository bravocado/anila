var gulp = require('gulp')
		,merge = require('merge-stream')
		,config = require('../config').copy
;

gulp.task('copy', ['templates'] , function() {

	var copyMisc = gulp.src(config.src.misc)
		.pipe(gulp.dest(config.dest.misc));

	var copySass = gulp.src(config.src.sass)
		.pipe(gulp.dest(config.dest.sass));

	return merge(copyMisc, copySass);
	
});