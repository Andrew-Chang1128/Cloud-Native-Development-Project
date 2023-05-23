const express = require("express");
const router = express.Router();

const driverController = require("../controllers/driverController")

controller = new driverController()
router.get('/driver', controller.driver)
router.get('/allDriver', controller.allDriver)
module.exports = router