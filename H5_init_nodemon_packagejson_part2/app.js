/**
 * Please run `npm install` first.
 */

//gets the nodejs http module
var http = require('http');
//gets the nodejs to handle files
var fs = require('fs');

var person = {
  firstName: 'Anderson',
  surname: 'Malagutti'
};

//creating server
http.createServer(function(request, response) {

  if (request.url === '/json') {
    //set content-type of the response
    response.writeHead( 200, { 'Content-Type' : 'application/json' } );
    response.end(JSON.stringify(person));
  } else if (request.url === '/') {
    response.writeHead( 200, { 'Content-Type' : 'text/html' } );
    fs.createReadStream(__dirname + '/index.htm').pipe(response);
  } else {
    response.writeHead(404);
    response.end();
  }  

//the port and the server address that the server will listen to.
}).listen(1337, '127.0.0.1');