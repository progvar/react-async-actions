module.exports = {
	entry: './src',
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	module: {
		loader: {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2017', 'es2016', 'es2015', 'react']
			}
		}
	}
}