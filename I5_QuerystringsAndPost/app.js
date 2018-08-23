/**
 * Run `npm install` first. ;)
 */

//using express module
var express = require('express');
//using bodyParser module
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var app = express();

//tries to get the environment variable PORT, defaults to 3000.
var port =  process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended : false });

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
  let queryString = request.query.q;
  //express is setting the contenty-type automatically here
	//using the view engine here
	response.render('person', { PERSON_NAME : name, QUERY_STRING: queryString });
});

app.post('/person', urlencodedParser ,function(request, response) {
  response.send('Thank you ;)');
  console.log(request.body.firstname);
  console.log(request.body.lastname);
});

app.post('/personjson', jsonParser ,function(request, response) {
  response.send('Thank you for the JSON data ;)');
  console.log(request.body.firstname);
  console.log(request.body.lastname);
});

app.get('/api', function(request, response) {
  //express is setting the contenty-type automatically here
  response.json({ firstname: 'Anderson', surname: 'Malagutti' });
});

app.listen(port);
