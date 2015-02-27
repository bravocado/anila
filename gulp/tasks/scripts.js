var gulp = require('gulp')
		,uglify = require('gulp-uglify')
    ,concat = require('gulp-concat')
		,merge = require('merge-stream')
		,config = require('../config')
;

gulp.task('scripts', function () {

	var compress = gulp.src(config.uglify.src)
	.pipe(uglify())
	.pipe(gulp.dest(config.uglify.dest));

	var concatLoader = gulp.src(config.concat.src.loader)
    .pipe(concat(config.concat.name.loader))
    .pipe(gulp.dest(config.concat.dest));

	var concatAmd = gulp.src(config.concat.src.amd)
    .pipe(concat(config.concat.name.amd))
    .pipe(gulp.dest(config.concat.dest));

	var concatVendor = gulp.src(config.concat.src.vendor)
    .pipe(concat(config.concat.name.vendor))
    .pipe(gulp.dest(config.concat.dest));

	var concatPlugin = gulp.src(config.concat.src.plugin)
    .pipe(concat(config.concat.name.plugin))
		.pipe(gulp.dest(config.concat.dest));

	var concatInit = gulp.src(config.concat.src.init)
    .pipe(concat(config.concat.name.init))
		.pipe(gulp.dest(config.concat.dest));

	return merge(compress, concatLoader, concatAmd, concatVendor, concatPlugin, concatInit);
});