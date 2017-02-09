// TODO. import TODO Model ;-)
// const Todo = require('../models/todo')
const Todo = require('../models/todo')

function create (params) {
  // create a new TODO and console log the response
  Todo.create(params, function(err, savedTodo){
    if (err){
      return;
      console.error(err)
    }
      console.log(savedTodo)
  })
}
function list () {
  // console log the list of all TODOs
  Todo.find({}, function (err, output){
    if (err){
      return;
      console.error(err)
    }
    console.log(output)
  })
}
function show (id) {
  // find the TODO with this id and console log it
  Todo.findById((id), function (err, showId){
    if(err){
      console.error(err)
      return;
    }
    console.log(showId)
  })
}
function update (id, params) {
  // find the TODO with this id and update it's params. console log the result.
  Todo.update((id), (params), {new: true}, function(err, updatedTodo){
    if(err){
      console.error(err)
      return
    }
    console.log(updatedTodo)
  })
}



function destroy (id) {
  // find the TODO with this id and destroy it. console log success/failure.
  Todo.findOneAndRemove((id), function (err, output){
    if (err){
      console.error(err)
      return
    }
    console.log(output)
  })
}

function destroyAll(){
  Todo.remove({},function(err, output){
    if (err){
      console.error(err)
      return
    }
    console.log(output)
  })
}


module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  destroyAll
}
