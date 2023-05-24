const express = require("express");
const router = express.Router();

const controller = require("../controllers/driverController")

const driverController = new controller()
router.get('/driver', driverController.driver)
router.get('/allDriver', driverController.allDriver)
module.exports = router