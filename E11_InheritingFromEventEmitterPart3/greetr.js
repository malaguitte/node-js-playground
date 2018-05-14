var EventEmitter = require('events');
var util = require('util');

//exporting the class
module.exports = class Greetr extends EventEmitter
{
	constructor()
	{
		super(); // = EventEmitter.call(this);
		this.greeting = "Hello world";
	}

	greet(data)
	{
		console.log(`${this.greeting} : ${data}`);
		this.emit('greet', data);
	}
}

// ======== Old style ===========

// function Greetr() {
// 	EventEmitter.call(this);
// 	this.greeting = 'Hello world!';
// }

// util.inherits(Greetr, EventEmitter);

// Greetr.prototype.greet = function(data) {
// 	console.log(this.greeting + ': ' + data);
// 	this.emit('greet', data);
// }
