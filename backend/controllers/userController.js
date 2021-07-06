var mongoose = require("mongoose");
var User = require("../models/user");
const jwt = require('jsonwebtoken');
var authconfig = require('../config/authconfig');
const bcrypt = require('bcryptjs');
const config = require('../config/authconfig');
var Local = require("../models/local");


var userController = {};

userController.createAccount = function (req, res) {
  var user = new User(req.body);
  console.log(user);
  User.findOne({ userName: req.body.userName }, function (err, result) {
    if (result != null) {
      if (!err && result.userName == req.body.userName) {
        res.json({ message: "User is already registered." });
      }
    } else {
      var hashedPassword = bcrypt.hashSync(req.body.password, 8);

      User.create({
          userName: req.body.userName,
          nome : req.body.nome || '',
          email : req.body.email,
          password : hashedPassword,
          role: req.body.email || "utilizador"
      }, 
      function (err, user) {
          if (err) return res.status(500).json(err);
    
          // if user is registered without errors
          // create a token
          var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
          });
    
          res.status(200).send({ auth: true, token: token });
      });
    }
  });
};
userController.showById = function (req, res) {
    User.findById(req.body._id, req.body, (err, dbUser) => {
      if (err) {
        console.log(err);
      } else {
        res.json(dbUser);
      }
    })
  }
  
  userController.showByUsername = function (req, res) {
    User.findOne({ userName: req.params.userName }).exec((err, dbUser) => {
      if (err) {
        console.log(err);
      } else {
        res.json(dbUser);
      }
    })
  }
  
  userController.editById = function (req, res) {
    User.findByIdAndUpdate(req.body._id, req.body, (err, editedUser) => {
      if (err) {
        console.log(err);
      } else {
        res.json(editedUser);
      }
    })
  }
  
  userController.editByUsername = function (req, res) {
    User.findOneAndUpdate(req.body.userName, req.body, (err, editedUser) => {
      if (err) {
        console.log(err);
      } else {
        res.json(editedUser);
      }
    })
  }
  
  userController.deleteById = function (req, res) {
    User.findByIdAndDelete(req.body._id, req.body, (err, deletedUser) => {
      if (err) {
        console.log(err);
      } else {
        res.json(deletedUser);
      }
    })
  }
  
  userController.deleteByUsername = function (req, res) {
    Local.find({}, (err, allLocals) =>{
      for(var i=0;i<allLocals.length;i++){
        if(allLocals[i].userID==req.params.userName){
          var x = allLocals[i]._id;
          console.log(x);
          Local.findByIdAndDelete(x,allLocals[i],(err, deletedLocal)=> {
            if(err) {
              console.log(err);
            } else {
              res.json(deletedLocal);
            }
          });
        }
      }
    });
    User.remove({ userName: req.params.userName }).exec((err, deletedUser) => {
      if (err) {
        console.log(err);
      } else {
        res.json(deletedUser);
      }
    })
  }
  
  userController.changeRoleToAdmin = function (req, res) {
    User.findOneAndUpdate(req.body.userName, { role: 'admin' }, (err, editedUser) => {
      if (err) {
        console.log(err);
      } else {
        res.json(editedUser);
      }
    })
  }
  
  module.exports = userController;