//gets the nodejs http module
var http = require('http');

var person = {
  firstName: 'Anderson',
  surname: 'Malagutti'
};

//creating server
http.createServer(function(request, response) {

  //set content-type of the response
  response.writeHead( 200, { 'Content-Type' : 'application/json' } );
  response.end(JSON.stringify(person));

//the port and the server address that the server will listen to.
}).listen(1337, '127.0.0.1');