var gulp = require('gulp');

gulp.task('build', [
	'clean'
	,'templates'
	,'images'
	,'sass'
	,'sass:compressed'
	,'copy'
	]
);