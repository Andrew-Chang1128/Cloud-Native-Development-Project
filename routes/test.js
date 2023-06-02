const express = require("express");
const router = express.Router();

const controller = require("../controllers/testController")

const testController = new controller()
router.post('/checkUserExist', testController.checkUserExist)
router.post('/createUser', testController.createUser)
router.post('/login', testController.login)
router.post('/createRoute', testController.createRoute)
router.post('/getDiverRoute', testController.getDiverRoute)
router.post('/getAllRoute', testController.getAllRoute)
router.post('/getDiverId', testController.getDiverId)
router.post('/addPassengerToOrder', testController.addPassengerToOrder)
router.post('/getPassengerAllOrder', testController.getPassengerAllOrder)
router.post('/getDriverAllOrder', testController.getDriverAllOrder)



module.exports = router