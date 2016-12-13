import gulp from 'gulp';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config'


gulp.task('babel', () => {
	return gulp.src('src/*.js')
		.pipe(babel())
		.pipe(gulp.dest('target'));
});

/*
gulp.task('default', function() {
	return gulp.src('src/app.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist/test'));

	/!*return gulp.src('source/js/app.js')
		.pipe(webpack())
		.pipe(gulp.dest('dist/js/'));*!/
});*/
