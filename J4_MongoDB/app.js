var express = require('express');
var app = express();

var mongoose = require('mongoose');
var databaseUrl = "mongodb://youruser:yourpassword@address:port/dbname";
mongoose.connect(databaseUrl);

var Schema = mongoose.Schema;
//how the object should be is defined here
var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

//creates a mongo model based on the personSchema
var Person = mongoose.model('Person', personSchema);
var john = Person({
	firstname: 'John',
	lastname: 'Doe',
	address: '5th Avenue'
});

john.save(function(error) {
	if (error) {
		throw error;
	}
	console.log('Person '+ john.firstname +' has been saved');
});

var jane = Person({
	firstname: 'Jane',
	lastname: 'Doe',
	address: '5th Avenue'
});

jane.save(function(error) {
	if (error) {
		throw error;
	}
	console.log('Person '+ jane.firstname +' has been saved');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	//get everything, empty query.
	Person.find({}, function(error, records) {
		if (error) {
			throw error;
		}

		console.log(records);
	});	

	next();
});

htmlController(app);

apiController(app);

app.listen(port);