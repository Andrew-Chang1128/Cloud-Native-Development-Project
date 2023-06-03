const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController")

const userController = new controller()
router.post('/login', userController.login)
// router.post('/createUser', userController.createUser)
module.exports = router