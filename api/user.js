module.exports = function(app) {
	app.get('/api/user', (req, res) => {

		var request = require('request');

		request({
			method: 'GET',
			url: 'https://private-d65a6-dssapi.apiary-mock.com/api/user/?user_id=user_id',
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

	});
}
