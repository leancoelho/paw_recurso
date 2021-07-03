var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

var userController = require('../controllers/userController');

router.get("/", userController.changeRoleToAdmin);

module.exports = router;