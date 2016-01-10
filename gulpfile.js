var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs');
 
gulp.task('default', function () {
	return gulp.src('src/main.js').
    pipe(gulp.dest('dist')).
    pipe(uglify('persianRex.js', {
      outSourceMap: true
    })).
    pipe(gulp.dest('dist'));
});
