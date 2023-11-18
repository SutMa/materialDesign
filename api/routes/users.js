var express = require('express');
var router = express.Router();
const userController = require('../controllers/registerController');
const loginController = require("../controllers/loginController");

router.post('/register', userController.registerUser)
router.get('/login', loginController.loginUser);