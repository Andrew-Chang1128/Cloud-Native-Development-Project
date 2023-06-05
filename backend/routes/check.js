const express = require("express");
const router = express.Router();

const controller = require("../controllers/checkController")

const checkController = new controller()
router.post('/post', checkController.post)
router.get('/get', checkController.get)
module.exports = router