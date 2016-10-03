module.exports = {
	entry: ['babel-polyfill', './src'],
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	module: {
		loader: {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel'
		}
	}
}