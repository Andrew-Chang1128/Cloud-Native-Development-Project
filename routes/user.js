const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController")

const userController = new controller()
router.get('/user', userController.user)
router.get('/alluser', userController.alluser)
module.exports = router