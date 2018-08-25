var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
  app.get('/person/:id', function(request, response) {
    response.render('person', { ID: request.params.id, Qstr: request.query.qstr });
  });

  app.post('/person', urlencodedParser, function(request, response) {
    response.send('Thank you!');
    console.log(request.body.firstname);
    console.log(request.body.lastname);
  });
}