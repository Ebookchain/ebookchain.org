var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

//Deploy

gulp.task('domain', function() {
  return gulp.src('CNAME').pipe(gulp.dest('./dist/'));
});

gulp.task('deploy', ['domain'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});