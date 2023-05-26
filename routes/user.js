const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController")

const userController = new controller()
router.get('/', userController.user)
router.get('/all', userController.alluser)
router.post('/login', userController.login)
module.exports = router