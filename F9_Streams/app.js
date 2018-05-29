//module that deals with files
var fs = require('fs');

var options = {
	encoding: 'utf8', //the encode
	highWaterMark: 16 * 1024 //sets the biggest number of the chunk
};

var readable = fs.createReadStream(__dirname + "/greet.txt" , options);

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
	console.log(chunk);
	console.log(chunk.length);
	//writes a chunk at a time
	writable.write(chunk);
})


