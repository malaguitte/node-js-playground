var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (request, response, next) {
	console.log('Request Url:' + request.url);
	next();
});

app.get('/', function(request, response) {
	response.render('index');
});

app.get('/person/:id', function(request, response) {
	response.render('person', { ID: request.params.id, Qstr: request.query.qstr });
});

app.post('/person', urlencodedParser, function(request, response) {
	response.send('Thank you!');
	console.log(request.body.firstname);
	console.log(request.body.lastname);
});


/**
 * Example of RESTful API methods
 */

app.get('/api/person/:id', function(request, response) {
	//gets info drom the database
	response.json({ firstname: 'John', lastname: 'Doe' });
});

app.post('/api/person', jsonParser, function(request, response) {
	//save to the database
});

app.delete('/api/person/:id', function(request, response) {
	//delete from the database
});

app.listen(port);