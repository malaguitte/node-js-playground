var Todo = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended : true }));

  //get all todos from an user
  app.get('/api/todos/:username', function(request, response) {
    let query = { username : request.params.username };
    Todo.find(query, function(error, userTodos) {
      if (error) {
        throw error;
      }
      response.send(userTodos);
    });
  });

  //get a single todo
  app.get('/api/todo/:todo_id', function(request, response) {
    Todo.findById(request.params.todo_id, function(error, singleTodo) {
      if (error) {
        throw error;
      }
      response.send(singleTodo);
    });
  });

  //add and update a todo
  app.post('/api/todo', function(request, response) {

    //if there's an id, let's update
    if (request.body.id) {
      
      let todoNewData = {
        todo : request.body.todo,
        isDone: request.body.isDone,
        hasAttachment: request.body.hasAttachment
      };

      Todo.findByIdAndUpdate(request.body.id, todoNewData, function(error, singleTodo) {
        if (error) {
          throw error;
        }
        response.send("Success");
      });

    }
    //new record 
    else {

      let newTodo = Todo({
        username: 'test',
        todo: request.body.todo,
        isDone: request.body.isDone,
        hasAttachment: request.body.hasAttachment
      });

      newTodo.save(function(error) {
        if (error) {
          throw error;
        }
        response.send("Success");
      })
    }
  });

  //delete method
  app.delete('/api/todo', function(request, response) {
    Todo.findByIdAndRemove(request.body.id, function(error) {
      if (error) {
        throw error;
      }
      response.send("Success");
    });
  });

}