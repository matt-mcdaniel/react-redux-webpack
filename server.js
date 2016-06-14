const path = require('path');
const express = require('express');
const api = require('./api/index');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const env = process.env.NODE_ENV;

if (env === 'development') {

	// Attach webpack/HMR middleware
	const webpack = require('webpack');
	const webpackMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const config = require('./webpack.config.js');
	const compiler = webpack(config);

	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
	}));

	app.use(require('webpack-hot-middleware')(compiler));

} else if (env === 'production') {

	// Specify location for static assets
	app.use(express.static(path.join(__dirname, 'public')));

}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Expose API
api(app);

// Serve index.html for all routes (hand-off to react-router)
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, '0.0.0.0', (err) => {
	if (err) console.log(err);

	console.info('🌎  Listening at http://localhost:%s.', port);
});
