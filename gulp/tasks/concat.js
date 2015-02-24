var gulp = require('gulp')
    ,concat = require('gulp-concat')
		,merge = require('merge-stream')
		,config = require('../config').concat
;

gulp.task('concat', function() {
	var concatVendor = gulp.src(config.src.vendor)
    .pipe(concat(config.name.vendor))
    .pipe(gulp.dest(config.dest));

	var concatPlugin = gulp.src(config.src.plugin)
    .pipe(concat(config.name.plugin))
		.pipe(gulp.dest(config.dest));

	return merge(concatVendor, concatPlugin);
});