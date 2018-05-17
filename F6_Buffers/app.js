var buffer = new Buffer('Hello', 'utf8');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer[2]);

//overrides the 'he'
console.log(buffer.write('wo'));
console.log(buffer.toString());