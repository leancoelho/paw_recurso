var express = require("express");
var fs = require("fs");
var path = require("path");
var router = express.Router();

var authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/logout", authController.logout);


module.exports = router;
