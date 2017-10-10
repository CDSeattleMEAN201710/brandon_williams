const express = require('express');
const app = express();
const path = require('path');
const PORT = 8000;
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
//Require and use session, and bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
//Set path directory for views, use ejs view engine
app.set('views',path.join(__dirname, './views'));
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, './node_modules')))

//Set express up server
const server = app.listen(PORT, function(){
  console.log("Listening to port")
});

//Connect mongoose to Mongo DB
mongoose.connect('mongodb://localhost/quotes_db');

// Create a Schema for Quotes
var QuoteSchema = new mongoose.Schema({
 name: {type: String},
 quote: {type: String},
 updated: { type: Date, default: Date.now },
}, {timestamps: true})
// Store the Schema under the name 'Quotes'
mongoose.model('Quotes', QuoteSchema);
// Retrieve the Schema called 'Quotes' and store it to the variable User
var Quotes = mongoose.model('Quotes');


//Handle for root route
app.get('/',function(request,response){

  response.render("index")
});


//Handle for processing form route
app.post('/process', function(request, response){
  var quote = new Quotes();
  quote.name = request.body.name;
  quote.quote = request.body.quote;
  quote.save(function(error){
    if(error){
      console.log("something went wrong")
    }else{
      response.redirect('/quotes')
    }
  })
});

//Handle for quotes route
app.get('/quotes', function(request, response){
  Quotes.find().sort({createdAt: -1}).find(function(error,quotes){
    if(error){
      console.log("Oh no what happened")
    }else{
      response.render("quotes", {'quotes': quotes})
    }
  })

});
