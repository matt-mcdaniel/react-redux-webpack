var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, 'app', 'Root.js')
	],
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel'],
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				loader: 'url-loader?limit=8192&name=img/[name].[ext]'
			}
		]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
			}
		}),
	],
}