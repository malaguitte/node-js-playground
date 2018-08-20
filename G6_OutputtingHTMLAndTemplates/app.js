//gets the nodejs http module
var http = require('http');
//module to deal with files
var fs = require('fs');

//creating server
http.createServer(function(request, response) {

  //set content-type of the response
  response.writeHead( 200, { 'Content-Type' : 'text/html' } );

  //getting html file
  var html = fs.readFileSync(__dirname + '/index.html', 'utf8');

  //include the custom message into the html
  var currentDate = new Date();
  var message = 'Hello World :) ' + currentDate.getHours() + ':' + currentDate.getMinutes();
  html = html.replace('{MyCustomMessage}', message);

  //set response's text
  response.end(html);

//the port and the server address that the server will listen to.
}).listen(1337, '127.0.0.1');