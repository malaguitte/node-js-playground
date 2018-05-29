//gets the library to deal with files
var fs = require('fs');

//read file using utf8
//note: "sync" makes the code stop and wait until the file is read
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

//keeps running the other code while reading the file
//better for multiple users and large files
var greet = fs.readFile(__dirname + '/greet.txt', 'utf8', function(error, data) {
  console.log(data);
});

//done will show up before the "readFile"
console.log("Done");
