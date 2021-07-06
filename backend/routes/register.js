var express = require("express");
var fs = require("fs");
var path = require("path");
var router = express.Router();

var userController = require("../controllers/userController");
console.log("ceho aqui ");
router.post("/", userController.createAccount);

module.exports = router;