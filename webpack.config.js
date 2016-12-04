const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    context: __dirname,
    devtool: 'inline-source-map',
    entry: ['babel-polyfill', 'whatwg-fetch', './src/client'],
    output: {
        path: path.join(__dirname, 'src/build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.scss', '.css', '.js', '.json'],
        modulesDirectories: ['node_modules', path.resolve(__dirname, './node_modules')]
    },
    module: {
        loaders: [{
            test: /(\.js|\.jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /(\.scss|\.css)$/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[local]!postcss!sass')
        }]
    },
    postcss: [autoprefixer],
    sassLoader: {
        includePaths: [path.resolve(__dirname, './src')]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', { allChunks: true })
    ]
}