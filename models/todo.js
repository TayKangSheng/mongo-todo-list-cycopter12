// Mongoose Schema and Models goes here
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  name: String,
  description: String,
  completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema);

// make this available to our other files
// export cos require in my index
module.exports = Todo;
