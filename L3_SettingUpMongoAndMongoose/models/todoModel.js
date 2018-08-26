var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;