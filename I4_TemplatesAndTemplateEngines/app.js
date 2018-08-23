/**
 * Run `npm install` first. ;)
 */

//using express module
var express = require('express');
var app = express();

//tries to get the environment variable PORT, defaults to 3000.
var port =  process.env.PORT || 3000;

//middleware
app.use('/assets', express.static(__dirname + '/public'));

//template engine
app.set('view engine', 'ejs');

//custom middleware - every request will pass through here.
app.use('/', function(request, response, next) {
	console.log("Request URL: " + request.url);
	next();
});

app.get('/', function(request, response) {
	//express is setting the contenty-type automatically here
	//using the view engine here.
	response.render('index');
});

//generic url, "id" can be anything
app.get('/person/:name', function(request, response) {
	//getting the id from the url
	let name = request.params.name;
  //express is setting the contenty-type automatically here
	//using the view engine here
	response.render('person', { PERSON_NAME : name });
});

app.get('/api', function(request, response) {
  //express is setting the contenty-type automatically here
  response.json({ firstname: 'Anderson', surname: 'Malagutti' });
});

app.listen(port);
