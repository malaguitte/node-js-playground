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

//custom middleware - every request will pass through here.
app.use('/', function(request, response, next) {
	console.log("Request URL: " + request.url);
	next();
});

var html = "<html><head><link href=assets/style.css type=text/css rel=stylesheet </link></head><body><h1>Hello World!</h1></body></html>";
app.get('/', function(request, response) {
  //express is setting the contenty-type automatically here
  response.send(html);
});

//generic url, "id" can be anything
app.get('/person/:id', function(request, response) {
	let personId = request.params.id;
  //express is setting the contenty-type automatically here
  response.send('<html><head></head><body><h1>Person: '+ personId +' </h1></body></html>');
});

app.get('/api', function(request, response) {
  //express is setting the contenty-type automatically here
  response.json({ firstname: 'Anderson', surname: 'Malagutti' });
});

app.listen(port);
