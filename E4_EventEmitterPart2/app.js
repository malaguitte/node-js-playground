const Emitter = require('events');
const eventConfig = require('./config');

var emitter1 = new Emitter();
emitter1.on(eventConfig.events.GREET, function(){
  console.log('Somewhere someone has said hello');
});
emitter1.on(eventConfig.events.GREET, function(){
  console.log('Called the greet function');
});

console.log('Saying hello');
emitter1.emit(eventConfig.events.GREET);
