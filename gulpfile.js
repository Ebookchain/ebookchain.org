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

var s3 = require("gulp-s3");
var fs = require("fs");

gulp.task('s3', function() {
  var aws = JSON.parse(fs.readFileSync('./aws.json'));
  gulp.src('./dist/**')
    .pipe(s3(aws));
});
