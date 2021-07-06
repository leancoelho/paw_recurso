var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

var authController = require('../controllers/authController');

router.get("/", authController.login);

module.exports = router;