//get Todo model.
var Todo = require('../models/todoModel');

module.exports = function(app) {

  app.get('/api/setupTodos', function(request, response) {
    //seed database
    var starterTodos = [
      {
        username: 'test',
        todo: 'Buy milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Buy bread',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Get haircut',
        isDone: false,
        hasAttachment: false
      }
    ];
    //insert todos
    Todo.create(starterTodos, function(error, results) {
      response.send(results)
    });
  });
}
