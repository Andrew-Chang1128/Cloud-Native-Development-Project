const express = require("express");
const router = express.Router();

const controller = require("../controllers/driverController")

const driverController = new controller()
console.log("type of driver ",typeof(driverController.driver) )
router.get('/', driverController.driver)
router.get('/all', driverController.allDriver)
module.exports = router