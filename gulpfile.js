var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require('webpack-stream');

gulp.task('default', function() {
	return gulp.src('src/app.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist/test'));

	/*return gulp.src('source/js/app.js')
		.pipe(webpack())
		.pipe(gulp.dest('dist/js/'));*/
});