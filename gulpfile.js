var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs'),
    concat = require('gulp-concat-util'),
    rename = require('gulp-rename'),
    pkj = require('./package.json'),
    banner = ['/* ', pkj.name, ' v', pkj.version, ' by ', pkj.author, ' */\n\n'].join('');
 
gulp.task('default', function () {
	return gulp.src('src/main.js').
    pipe(rename('persian-rex.js')).
    pipe(concat.header(banner)).
    pipe(gulp.dest('dist')).
    pipe(uglify('persian-rex.min.js', {
      outSourceMap: true,
    })).
    pipe(concat.header(banner)).
    pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  return gulp.watch('src/**/*', ['default']);
});
