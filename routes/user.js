const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")

controller = new userController()
router.get('/user', controller.user)
router.get('/alluser', controller.alluser)
module.exports = router