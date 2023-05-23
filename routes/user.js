const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController")
router.get('/user', controller.user)
router.get('/allUser', controller.allUser)

module.exports = router