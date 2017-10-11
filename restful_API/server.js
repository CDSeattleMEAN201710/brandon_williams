const express = require('express')
const app = express();
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const PORT = 8000;
mongoose.Promise = global.Promise;

//Use parser, and configure parser to read JSON
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Set views PATH
app.set('views', path.join(__dirname,'./client/views'))

// require the mongoose configuration file: connects mongoose and grabs models
require('./server/config/mongoose.js');
// invoke the function returned from routes.js and pass it the "app" variable
require('./server/config/routes.js')(app);

//set up server to listen to PORT
const server = app.listen(PORT, function(){
  console.log("Listening to Port", PORT)
})
