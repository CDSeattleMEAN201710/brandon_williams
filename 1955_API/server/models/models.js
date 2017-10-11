const mongoose = require('mongoose');

//Create schema for person
const PersonSchema = new mongoose.Schema({
  name: String,
})

//Create collection
const Person = mongoose.model('Person', PersonSchema)
