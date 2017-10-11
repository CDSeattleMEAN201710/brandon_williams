const mongoose = require('mongoose')
const Person = mongoose.model('Person')

module.exports = {
  //Control root route, display all persons
  index: function(request,response){
    Person.find({}, function(err,persons){
      if(err){
        console.log("Cant display persons", err)
      }else{
        response.json(persons)
      }
    })
  },
  //Control to create new person based off URL params
  add: function(request,response){
    let newPerson = new Person ({name: request.params.name})
    newPerson.save(function(err){
      if(err){
        console.log("Cannot Create person", err)
      }else{
        response.redirect('/')
      }
    });
  },
  //Remove name based off URL params
  destroy: function(request, response){
    Person.remove({name:request.params.name}, function(err,person){
      if(err){
        console.log("cant remove person",err)
      }else{
        response.redirect('/')
      }
    });
  },
  //Control to show specific person based off URL params
  show: function(request, response){
    Person.findOne({name:request.params.name}, function(err,person){
      if(err){
        console.log("cant show person",err)
      }else{
        response.json(person)
      }
    })
  },
};
