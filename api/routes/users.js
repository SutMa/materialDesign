var express = require('express');
var router = express.Router();
const userController = require('../controllers/registerController');


router.post('/register', userController.registerUser)