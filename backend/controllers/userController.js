var mongoose = require("mongoose");
var User = require("../models/user");
const jwt = require('jsonwebtoken');
var authconfig = require('../config/authconfig');
const user = require("../models/user");

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
      user.save((err) => {
        {
          if (err) {
            console.log(err);
          } else {
            res.json({ registo: true });
          }
        }
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