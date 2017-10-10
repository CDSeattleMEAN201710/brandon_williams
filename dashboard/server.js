const express = require('express')
const app = express();
const path = require('path');
const PORT = 8000;
const mongoose = require('mongoose');
const bodyParser = require("body-parser")

//Use bodyparser, set path directory for views, use ejs view engine
app.use(bodyParser.urlencoded({extended: false}));
app.set('views',path.join(__dirname, './views'));
app.set('view engine', 'ejs')

//set up server to listen to PORT
const server = app.listen(PORT, function(){
  console.log("Listening to Port", PORT)
})

//Connect mongoose to MONGODB, make sure mongodb is running
mongoose.connect("mongodb://localhost/dashboard_db")

//Create Schema for my animal
var AnimalSchema = new mongoose.Schema({
  name: String,
  type: String,
  color: String,
  age: Number,
}, {timestamps: true });
//Store Schema in mongoose.model
mongoose.model("Animals",AnimalSchema)
//Retrieve Schema from model and store it
var Animals = mongoose.model("Animals")


//Handle for root route, display all animals
app.get('/', function(request, response){
  Animals.find({}, function(error, animals){
    if(error){
      console.log("what happened?")
    }else{
      response.render("index", {'animals':animals})
    }
  });
})

//Process new form to create new animal
app.post('/mongooses', function(request, response){
  var animal = new Animals();
  animal.name = request.body.name;
  animal.type = request.body.type;
  animal.color = request.body.color;
  animal.age = request.body.age;
  animal.save(function(error){
    if(error){
      console.log("something went wrong")
    }else{
      response.redirect('/')
    }
  })
})

//Handle to Display new form to create new animal
app.get('/mongooses/new', function(request, response){
  console.log("I made it to the new route")
  response.render("new")
})


//Handle to display individual animal
app.get('/mongooses/:id', function(request, response){
  Animals.find({_id: request.params.id}, function(error,animal){
    if(error){
      console.log("cant find animal")
    }else{
      console.log(animal)
      response.render('id', {"animal":animal[0]})
    }
  })
})


//Handle to display edit form
app.get('/mongooses/edit/:id', function(request, response){
  Animals.find({_id: request.params.id}, function(error,animal){
    if(error){
      console.log("cant find animal")
    }else{
      response.render('edit', {"animal":animal[0]})
    }
  })
})

//Process edit form for specific animal and make changes
app.post('/mongooses/:id', function(request, response){
  Animals.update({_id: request.params.id}, request.body, function(error,animal){
    if(error){
      console.log("something wrong happened")
    }else{
      response.redirect("/")
    }
  })
})

//Delete animal from database
app.get('/mongooses/destroy/:id', function(request, response){
  Animals.remove({ _id: request.params.id }, function(error, animal){
    if (error) { console.log(error); }
    response.redirect('/');
  });
})
