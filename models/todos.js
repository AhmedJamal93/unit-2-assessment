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

module.exports ={
  getAll:getAll,
  create:create,
}
