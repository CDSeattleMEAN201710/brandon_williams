const express = require('express');
const app = express();
const session = require('express-session');
app.use(session({secret: "brandon"}));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
const path = require('path');
const PORT = 8000;
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')

app.listen(PORT, function(){
  console.log(`Listening to Port: ${PORT}`)
});


//Handle the root route
app.get('/', function(request,response){
  if(request.session.random_number){
    request.session.random_number = request.session.random_number
  }else{
    request.session.random_number = Math.floor(Math.random()*100) + 1;
  }

  if(request.session.success){
    var message = request.session.success;
  }else if(request.session.error){
    var message = request.session.error;
  }else if(!request.session.success && !request.session.error){
    var message = ""
  }

  context = {
    random_number: request.session.random_number,
    message: message,
    state: request.session.state,
  }
  response.render("index", context)
});

//Handle processing the form, check to see of guess == random_number
app.post('/process', function(request,response){
  if(request.session.random_number == request.body.number){
    request.session.success = request.session.random_number +" was the number!";
    request.session.state = true;
  }if(request.session.random_number < request.body.number){
    request.session.error = "Too High!"
    request.session.state = false;
  }if(request.session.random_number > request.body.number){
    request.session.error = "Too Low!"
    request.session.state= false;
  }
  response.redirect("/")
})

app.post('/reset', function(request,response){
  request.session.destroy()
  response.redirect("/")
})
