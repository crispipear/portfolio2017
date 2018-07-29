var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function() {
  return gulp.src('lib/*.scss')
    .pipe(sass())
    .on('error', onError)
    .pipe(gulp.dest('lib'))
    .pipe(browserSync.reload({
      stream: true
    }))
})
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('lib/*.scss', ['sass']);
  gulp.watch('*/*.html', browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('*/files/*.png', browserSync.reload);
  gulp.watch('lib/*.js', browserSync.reload);
})
function onError(err) {
  console.log(err);
  this.emit('end');
}
