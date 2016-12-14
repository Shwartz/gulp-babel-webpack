var gulp = require('gulp');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');


gulp.task('babel', () => {
	return gulp.src('src/js/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist1'));
});


gulp.task('webpack', function(callback) {
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	];

	// run webpack
	webpack(myConfig, function(err, stats) {
		if (err) throw new gutil.PluginError('webpack', err);
		gutil.log('[webpack]', stats.toString({
			colors: true,
			progress: true
		}));
		callback();
	});
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
