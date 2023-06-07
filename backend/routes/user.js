const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController")
const authentication = require("../utils/authentication")

const userController = new controller()
router.post('/login', userController.login);
router.post('/createUser', userController.createUser);
router.get('/', authentication.auth, userController.user);
module.exports = router