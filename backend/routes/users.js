var express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
var router = express.Router();

router.get('/userProfile/:userName', userController.showByUsername);

router.put('/userProfile/edit/:userName', userController.editByUsername);

router.delete('/userProfile/deleteuser/:userName', userController.deleteByUsername);

router.put('/userProfile/edit/:userName', userController.editByUsername, authController.verifyToken);


module.exports = router;