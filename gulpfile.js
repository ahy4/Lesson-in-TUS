var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task("default", function () {
  gulp
    .src(["代数学1/1/README.md"])
    .pipe(replace(/\${3}(.*)\${3}/g, 'foo$1foo'))
    .pipe(gulp.dest('build/file.txt'));
});
