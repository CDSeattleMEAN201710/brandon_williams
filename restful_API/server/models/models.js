const mongoose = require('mongoose');

//Create Schema
const ObjectSchema = new mongoose.Schema({
  title: { type: String, default:""},
  description: { type: String, default:""},
  completed: { type: Boolean, default: false},
},{timestamps: true })

//Create collection
const Object = mongoose.model("Object",ObjectSchema)
