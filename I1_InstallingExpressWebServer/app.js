/**
 * Run `npm install` first. ;)
 */

//using express module
var express = require('express');
var app = express();

//tries to get the environment variable PORT, defaults to 3000.
var port =  process.env.PORT || 3000;

app.get('/', function(request, response) {
  //express is setting the contenty-type automatically here
  response.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/api', function(request, response) {
  //express is setting the contenty-type automatically here
  response.json({ firstname: 'Anderson', surname: 'Malagutti' });
});

app.listen(port);
