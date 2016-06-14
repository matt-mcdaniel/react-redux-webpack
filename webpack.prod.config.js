const validate = require('webpack-validator');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = validate({
	devtool: 'cheap-module-source-map',
	entry: path.join(__dirname, 'app', 'Root.js'),
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				loader: 'url-loader?limit=10240&name=img/[name].[ext]'
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
			}
		]
	},
	postcss() {
		return [autoprefixer];
	},
	resolve: {
		modulesDirectories: [
			'node_modules',
			'app',
			'assets'
		]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }
		}),
		new ExtractTextPlugin('styles.css', {
			allChunks: true
		})
	]
});