var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: String,
  birthDate: { type: Date },
  role: { 
    type: String, 
    default: 'utilizador' 
  }
});

module.exports = mongoose.model('User', UserSchema);