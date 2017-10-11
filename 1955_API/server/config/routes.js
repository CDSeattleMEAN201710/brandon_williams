const mongoose = require('mongoose');
const person = require("./../controllers/logic.js");

module.exports = function(app){
  //Route for index page
  app.get('/', function(request,response){
    person.index(request,response)
  });
  //Route to create new person
  app.get('/new/:name/', function(request,response){
    person.add(request,response)
  });
  //Route to remove person
  app.get('/remove/:name/', function(request, response){
    person.destroy(request, response)
  });
  //Route to show person
  app.get('/:name/', function(request, response){
    person.show(request, response)
  });
}
