//webpack --display-error-details
var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');


gulp.task('babel', () => {
	return gulp.src('src/js/**/*.js')
		/*.pipe(sourcemaps.init())*/
		.pipe(babel({
			presets: ['es2015']
		}))
		/*.pipe(sourcemaps.write('.'))*/
		.pipe(gulp.dest('tmp-js'));
});
//console.log('NODE_ENV=production: ', NODE_ENV);

gulp.task('webpack', ['babel'], (callback) => {
	//var myConfig = Object.create(webpackConfig);
	var myConfig = webpackConfig;
	console.log('MYCONFIG 1: ', myConfig);

	myConfig.plugins = [
		/*new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()*/
	];
	console.log('MYCONFIG 2: ', myConfig);
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

//NODE_ENV=production

