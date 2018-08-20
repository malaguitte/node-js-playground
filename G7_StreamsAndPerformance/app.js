//gets the nodejs http module
var http = require('http');
//module to deal with files
var fs = require('fs');

//creating server
http.createServer(function(request, response) {

  //set content-type of the response
  response.writeHead( 200, { 'Content-Type' : 'text/html' } );

  //getting html file
  //using pipe to process the data into smaller chunks, it improves perfomance 
  fs.createReadStream(__dirname + '/index.html').pipe(response);

//the port and the server address that the server will listen to.
}).listen(1337, '127.0.0.1');