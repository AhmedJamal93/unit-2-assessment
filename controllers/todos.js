const Todos = require('../models/todos.js');

function index(req,res,next){
  res.render('index' , {
    todos:Todos.getAll(),
  })
}

function create(req,res){
  console.log(req.body);
  Todos.create(req.body);
  res.redirect('/')
}

function deleteTodo(req, res){
  Todos.deleteOne(req.params.id);
  res.redirect('/');
}

module.exports = {
  index:index,
  create:create,
  delete:deleteTodo,
}
