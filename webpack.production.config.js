var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: path.join(__dirname, 'app', 'Root.js'),
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			},
			{
				test: /\.js$/,
				loader: 'babel',
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				loader: 'url-loader?limit=8192&name=img/[name].[ext]'
			}
		]
	},
	plugins: [
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
}