const Emitter = require('./emitter');

var emitter1 = new Emitter();
emitter1.on('greet', function(){
  console.log('Somewhere someone has said hello');
});
emitter1.on('greet', function(){
  console.log('Called the greet function');
});

console.log('Saying hello');
emitter1.emit('greet');
