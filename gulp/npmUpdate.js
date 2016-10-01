var gulp  = require('gulp');
 
gulp.task('npmUpdate', function () {
  var update = require('gulp-update')();
 
  gulp.watch('./package.json').on('change', function (file) {
    update.write(file);
  });
 
})