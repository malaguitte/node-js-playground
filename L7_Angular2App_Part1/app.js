var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public/src'));

//workaround to make the imports work
app.use('/node_modules', express.static(__dirname + '/public/node_modules'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDatabaseUrl());

setupController(app);
apiController(app);

app.listen(port);