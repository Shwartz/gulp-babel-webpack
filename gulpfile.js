"use strict";

var PATH = require("path");
var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var loader = require('babel-loader');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var PATHS = {
	sass: ['src/scss/**/*.scss'],
	es6: ['src/js/**/*.js']
};

/**
 * CSS TASKS
 */

gulp.task('sass-dev', function () {
	return gulp.src(PATHS.sass)
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dev/css'))
		.pipe(browserSync.stream());
});

gulp.task('sass-dist', function () {
	return gulp.src(PATHS.sass)
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist/css'));
});

/**
 * JAVASCRIPT TASKS
 */

gulp.task('js-dev', function () {
	webpack(webpackConfig, function (err, stats) {
		if (err) throw new gutil.PluginError('webpack', err);
		gutil.log('[webpack]', stats.toString({
			colors: true,
			progress: true
		}));
	});
});

gulp.task('js-dist', function () {
	webpackConfig.plugins = [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	];

	webpackConfig.output = {
		path: PATH.resolve(__dirname, 'dist/js'),
		filename: 'bundle.min.js'
	};

	// run webpack
	webpack(webpackConfig, function (err, stats) {
		if (err) throw new gutil.PluginError('webpack', err);
		gutil.log('[webpack]', stats.toString({
			colors: true,
			progress: true
		}));
	});
});
/**
 * SERVER TASKS
 */

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: ''
		},
		startPath: 'src/web/'
	})
});

/**
 * RUN GULP TASKS
 * default, watch, dist
 */
gulp.task('default', ['browserSync', 'watch']);

gulp.task('watch', ['sass-dev', 'js-dev'], function () {
	gulp.watch(PATHS.sass, ['sass-dev', reload]);
	gulp.watch(PATHS.es6, ['js-dev', reload]);
	// Other watchers can also be added here
});

gulp.task('dist', ['sass-dist', 'js-dist']);