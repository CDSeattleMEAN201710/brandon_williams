const mongoose = require('mongoose');
const Task = mongoose.model('Object');

module.exports = {
  //Control root route, display all tasks
  index: function(request,response){
    Task.find({}, function(err,tasks){
      if(err){
        console.log("Cant display tasks", err)
      }else{
        response.json(tasks)
      }
    })
  },
  //Control to create new tasks based off URL params
  add: function(request,response){
    let newTask = new Task ({title: request.params.title})
    newTask.save(function(err){
      if(err){
        console.log("Cannot Create task", err)
      }else{
        response.redirect('/')
      }
    });
  },
  //Update task by ID
  update: function(request,response){
    var obj = {}
    obj[request.params.field] = request.params.update
    Task.update({_id:request.params.id}, obj, function(err,task){
      if(err){
        console.log('cant update', err)
      }else{
        response.redirect('/')
      }
    })
  },
  //Remove task based off URL params(id)
  destroy: function(request, response){
    Task.remove({_id:request.params.id}, function(err,task){
      if(err){
        console.log("cant remove task",err)
      }else{
        response.redirect('/')
      }
    });
  },
  //Control to show specific person based off URL params
  show: function(request, response){
    Task.findOne({_id:request.params.id}, function(err,task){
      if(err){
        console.log("cant show task",err)
      }else{
        response.json(task)
      }
    })
  },
}
