var gulp = require('gulp')
    ,del = require('del')
;

// Clean Output Directory
gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['dist/**/**/*'], cb);
});