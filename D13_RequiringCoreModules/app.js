//We do not need the './' because it is a core module
const util = require('util');

const name      = 'Anderson';
const greeting  = util.format('Hello, %s', name);
util.log(greeting);