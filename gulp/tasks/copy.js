var gulp = require('gulp')
		,merge = require('merge-stream')
		,config = require('../config').copy
;

gulp.task('copy', ['templates'] , function() {

	var copyMisc = gulp.src(config.miscSrc)
		.pipe(gulp.dest(config.miscDest));

	var copySass = gulp.src(config.sassSrc)
		.pipe(gulp.dest(config.sassDest));

	return merge(copyMisc, copySass);
	
});