const express = require("express");
const router = express.Router();

const controller = require("../controllers/routeController");
const authentication = require("../utils/authentication")
const routeController = new controller()
//define jwt auth middleware for /allRoutes

router.post('/', authentication.auth, routeController.addRoute);
router.get('/', authentication.auth, routeController.getAllDriverRoutes);
router.get('/allRoutes', authentication.auth, routeController.getAllRoutes);
router.post('/reservation/:rid', authentication.auth, routeController.addPassengerToRoute);
router.get('/reservation', authentication.auth, routeController.getPassengerAllRoutes);
router.post('/fee', authentication.auth, routeController.getFee);
router.get('/allOrders', authentication.auth, routeController.getDriverAllOrders);
router.get('/routeId/:rid', authentication.auth, routeController.getRoute);

module.exports = router