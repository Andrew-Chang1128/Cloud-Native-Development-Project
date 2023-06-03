const rmodel = require("../models/routeModel")
const oModel = require("../models/orderModel")
const uModel = require("../models/userModel")

module.exports = class routeController {
    async addRoute(req, res) {
        const { dayOfWeek, maxNumOfPassenger, startTime, routeList } = req.body;
        if (!dayOfWeek || !maxNumOfPassenger || !startTime || !routeList) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }
        const routeModel = new rmodel();
        const routeId = await routeModel.createRoute(req.userId, dayOfWeek, maxNumOfPassenger, startTime, routeList);
        if (routeId < 0) {
            res.status(500).json({ error: 'Failed to insert route information' });
        } else {
            console.log(`routeId returned is:${routeId}`);
            res.status(200).json({ message: 'Route information inserted successfully' });
        }

    };

    async getAllDriverRoutes(req, res) {
        const driverId = req.userId;

        const routeModel = new rmodel();
        const result = await routeModel.getDiverRoute(driverId);

        if (result == false) {
            res.status(500).json({ error: 'Failed to get route information' });
        } else {
            res.status(200).json(result);
        }
    };

    async getRoute(req, res) {
        const driverId = req.userId;
        const routeId = req.params.rid;

        console.log("routeId", routeId)

        const routeModel = new rmodel();
        const result = await routeModel.getDiverRoute(driverId);

        if (result == false) {
            res.status(500).json({ error: 'Failed to get route information' });
        } else {
            // parse the result array and check if the routeId is in the array
            let ret = null;
            for (let i = 0; i < result.length; i++) {
                if (result[i].routeId == routeId) {
                    ret = result[i];
                    break;
                }
            }
            if (ret == null) {
                res.status(400).json({ error: 'No route found' });
            } else {
                res.status(200).json(ret);
            }
        }
    };

    async getAllRoutes(req, res) {
        const routeModel = new rmodel();
        const result = await routeModel.getAllRoute();

        if (result == false) {
            res.status(500).json({ error: 'Failed to get route information' });
        } else {
            res.status(200).json(result);
        }
    };

    async addPassengerToRoute(req, res) {
        const { numOfPassenger, datetime, start, end } = req.body;

        if (!numOfPassenger || !datetime || !start || !end) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }

        const latDiff = end.lat - start.lat;
        const lngDiff = end.lng - start.lng;

        const distance = Math.sqrt((latDiff * 110) ** 2 + (lngDiff * 101) ** 2);
        const fee = Math.ceil((distance * 5 + 20) * (1 + (numOfPassenger - 1) * 0.5));

        const orderModel = new oModel();
        const result = await orderModel.addPassengerToOrder(req.userId, req.params.rid, datetime, numOfPassenger, start, end, fee);

        if (result == false) {
            res.status(500).json({ error: 'Failed to add passenger to route' });
        } else {
            res.status(200).json({ fee: fee });
        }
    };

    async getPassengerAllRoutes(req, res) {
        const orderModel = new oModel();
        const result = await orderModel.getPassengerAllOrder(req.userId);

        if (result == false) {
            res.status(500).json({ error: 'Failed to get route information' });
        } else {
            res.status(200).json(result);
        }
    };

    getFee(req, res) {
        const { numOfPassenger, start, end } = req.body;

        if (!numOfPassenger || !start || !end) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }

        const latDiff = end.lat - start.lat;
        const lngDiff = end.lng - start.lng;

        const distance = Math.sqrt((latDiff * 110) ** 2 + (lngDiff * 101) ** 2);
        const fee = Math.ceil((distance * 5 + 20) * (1 + (numOfPassenger - 1) * 0.5));

        res.status(200).json({ fee: fee })
    };

    async getDriverAllOrders(req, res) {
        const driverId = req.userId;

        const orderModel = new oModel();
        const result = await orderModel.getDriverAllOrder(driverId);

        res.status(200).json(result);
    };
}