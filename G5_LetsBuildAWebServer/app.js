//gets the nodejs http module
var http = require('http');

//creating server
http.createServer(function(request, response) {

  //set content-type of the response
  response.writeHead( 200, { 'Content-Type' : 'text/plain' } );
  //set response's text
  response.end('Hello World! :) \n');

//the port and the server address that the server will listen to.
}).listen(1337, '127.0.0.1');