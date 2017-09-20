const greet1  = require('./greet1');
greet1();

const greet2  = require('./greet2').greet;
greet2();

const greet3  = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed it here!';

const greet3b = require('./greet3');
greet3b.greet();

const Greet4  = require('./greet4');
const greet4 = new Greet4();
greet4.greet();
greet4.greeting = 'Trying to change it...';

greet4b = new Greet4();
greet4b.greet();

const greet5  = require('./greet5');
greet5.greet1();
greet5.greet2();
