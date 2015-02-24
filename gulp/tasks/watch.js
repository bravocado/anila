/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp  = require('gulp')
		,config= require('../config')
;

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch([config.sass.src.all, config.sass.src.custom],   ['sass', 'sass:compressed']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.templates.src.watch, ['templates']);
  gulp.watch(config.copy.miscSrc, ['copy:misc']);
});
