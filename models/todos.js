let todos = []

function getAll(){
  return todos;
}

function create(todo){
  todo.id = Date.now() % 1000000;
  todos.push(todo)
  todo.done = 'Not Done'
  console.log(todos)
}

function deleteOne(id){
  const idx = todos.findIndex(todo => todo.id === parseInt(id));
  todos.splice(idx,1)
}

module.exports ={
  getAll:getAll,
  create:create,
  deleteOne:deleteOne,
}
