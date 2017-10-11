const mongoose = require('mongoose')
const Object = mongoose.model("Object")
const task = require('../controllers/control.js')

module.exports = function(app){
  //Handle for root route, display all tasks
  app.get('/', function(request, response){
    task.index(request,response)
  });

  //Route to display individual task
  app.get('/task/:id', function(request, response){
    task.show(request, response);
  });

  //Create a task
  app.post('/task/:title', function(request,response){
    task.add(request,response);
  })

  //Uddate task by ID
  app.put('/task/:id/:field/:update', function(request, response){
    task.update(request, response)
  });

  //Delete Task
  app.delete('/task/:id', function(request, response){
    task.destroy(request, response)
  })
};
