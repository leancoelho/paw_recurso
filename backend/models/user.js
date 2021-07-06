var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true
  },
  nome:{
      type: String,
  },
  email: {
    type: String,
    unique: true
  },
  password: {type: String},
  birthDate: {type: Date},
  role: { 
    type: String, 
    default: 'utilizador' 
  }
});

module.exports = mongoose.model('User', UserSchema);