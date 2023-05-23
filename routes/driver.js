const express = require("express");
const router = express.Router();

const controller = require("../controllers/driverController")
router.get('/driver', controller.driver)
router.get('/allDriver', controller.allDriver)
module.exports = router