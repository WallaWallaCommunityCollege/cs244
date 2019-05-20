const gulp = require('gulp');
gulp.task('default', ['clean', 'copy', 'build'], function (done) {
    console.log('default ready');
    done();
});
gulp.task('clean', function (done) {
    setTimeout(done, 2000);
});
gulp.task('copy', function (done) {
    setTimeout(done, 2000);
});
gulp.task('build', function (done) {
    setTimeout(done, 2000);
});