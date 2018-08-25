var express = require('express');
var app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (request, response, next) {

	let connection = mysql.createConnection({
		host: 'localhost',
		user: '*****************************',
		password: '*****************************',
		database: 'nodejs'
	});

	let query = `SELECT p.id, p.firstname, p.lastname, a.address FROM Person as p
	INNER JOIN PersonAddress as pa ON p.id = pa.personid
	INNER JOIN Address as a ON pa.addressid = a.id`;

	connection.query(query, function (error, records) { 
		if (error) {
			throw error;
		}
		console.log(records);
	});
	console.log('Request Url:' + request.url);
	next();
});

htmlController(app);

apiController(app);

app.listen(port);