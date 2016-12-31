const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const taskSchema = new Schema({
  name: { type: String },
  completed: { type: Boolean, default: false }
});

//Create model class
const ModelClass = mongoose.model('task', taskSchema);

module.exports = ModelClass;
