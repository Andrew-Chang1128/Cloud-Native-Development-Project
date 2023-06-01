const express = require("express");
const router = express.Router();
const authentication = require("../utils/authentication")
const controller = require("../controllers/itemController")

const itemController = new controller()
router.get('/', itemController.item)
router.get('/all', itemController.getAllItem)
router.get('/userItem',authentication.auth, itemController.getUserItem)
router.get('/addItem',authentication.auth, itemController.addItem)
// console.log(typeof(router))
module.exports = router