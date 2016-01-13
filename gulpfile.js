var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs'),
    rename = require('gulp-rename');
 
gulp.task('default', function () {
	return gulp.src('src/main.js').
    pipe(rename('persian-rex.js')).
    pipe(gulp.dest('dist')).
    pipe(uglify('persian-rex.min.js', {
      outSourceMap: true
    })).
    pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  return gulp.watch('src/**/*', ['default']);
});
