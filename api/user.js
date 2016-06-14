module.exports = function(app) {
	app.get('/api/user', (req, res) => {

		var request = require('request');

		console.log('make API request');
		/*
		request({
			method: 'GET',
			url: '',
			headers: {
				'Authorization': 'Basic 0123456789ABCDEF=='
			}}, function (err, response, body) {

				// write to log file
				console.log(
					'\n',
					'---\n',
					response.headers.date + '\n',
					response.request.method + ' ' + response.statusCode + ' ' + response.statusMessage + '\n',
					response.request.uri.href + '\n',
					'---'
				);

				res.send(body);
		});
		*/

	});
}
