//module that deals with files
var fs = require('fs');
//module that deals with compression
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + "/greet.txt");

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

//a readable AND writable stream at the same time
var gzip = zlib.createGzip();


//connects both streams ("water pipe")
readable.pipe(writable);

//writes to gzip, then reads from gzip and writes to compressed
//you may keep connecting pipes here
readable.pipe(gzip).pipe(compressed);
