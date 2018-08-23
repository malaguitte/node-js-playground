
//Please run "npm install" to download the moment module first.

//using the module moment from node_modules
var moment = require('moment');

//prints day of week and hour. E.g: Thu, 8PM
console.log(moment().format('ddd, hA'));
