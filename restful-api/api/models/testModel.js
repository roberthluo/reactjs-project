// Using Moogose


'use strict';
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/myappdatabase');
var Schema = mongoose.Schema;

//create a Schema
var userSchema = new Schema
({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  admin: Boolean,
  other:
  {
      age: Number,
      website: String,
      status: String
  }
  created_at: Date,
  updated_at: Date
})

module.exports = mongoose.model('Users', UserSchema);

module.exports = User;
