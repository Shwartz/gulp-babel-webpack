var path = require('path');

module.exports = {
	entry: path.resolve('./tmp-js/app.js'),
	output: {
		filename: 'magic.js',
		path: path.resolve('./dist'),
		libraryTarget: "var",
	},
	devtool: 'source-map',
	// export itself to a global var
};



