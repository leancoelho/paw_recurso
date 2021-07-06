var express = require("express");
var fs = require('fs');
var path = require('path');
var router = express.Router();

var localController = require('../controllers/localController');

router.get("/showAllLocals", localController.showAllLocals);

router.get("/showLocal/:id", localController.showByID);

router.put("/edit/:id", localController.editByID);

router.post("/createLocal/:id", localController.createLocal);

router.delete("/delete/:id", localController.deleteByID);

router.put("/like/:id/:id1", localController.like);

router.put("/dislike/:id/:id1", localController.dislike);


module.exports = router;