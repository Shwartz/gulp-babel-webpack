var PATH = require('path');

module.exports = {
	entry: {
		app: PATH.resolve(__dirname, 'src/js/app.js'),
	},
	output: {
		path: PATH.resolve(__dirname, 'dev/js'),
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};