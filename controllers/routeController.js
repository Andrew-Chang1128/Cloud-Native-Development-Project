const rmodel = require("../models/routeModel")
const oModel = require("../models/orderModel")
const uModel = require("../models/userModel")

module.exports = class routeController {
    addRoute(req, res) {
        const { dayOfWeek, maxNumOfPassenger, startTime, routeList } = req.body;
        if (!dayOfWeek || !maxNumOfPassenger || !startTime || !routeList) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }
        const routeModel = new rmodel();
        const routeId = routeModel.createRoute(req.userId, dayOfWeek, maxNumOfPassenger, startTime, routeList);
        if (routeId < 0) {
            res.status(500).json({ error: 'Failed to insert route information' });
        } else {
            console.log(`routeId returned is:${routeId}`);
            res.status(200).json({ message: 'Route information inserted successfully' });
        }

    };

    getAllDriverRoutes(req, res) {
        const driverId = req.userId;

        const routeModel = new rmodel();
        const result = routeModel.getDiverRoute(driverId);

        if (result == false) {
            res.status(500).json({ error: 'Failed to get route information' });
        } else {
            res.status(200).json(result);
        }
    };

    getRoute(req, res) {
        const driverId = req.userId;
        const routeId = req.params.rid;

        const routeModel = new rmodel();
        const result = routeModel.getDiverRoute(driverId);

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

    getAllRoutes(req, res) {
        const routeModel = new rmodel();
        const result = routeModel.getAllRoute();

        if (result == false) {
            res.status(500).json({ error: 'Failed to get route information' });
        } else {
            res.status(200).json(result);
        }
    };

    addPassengerToRoute(req, res) {
        const { numOfPassenger, datetime, start, end } = req.body;

        if (!numOfPassenger || !datetime || !start || !end) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }

        const orderModel = new oModel();
        const fee = orderModel.addPassengerToOrder(req.userId, req.params.rid, datetime, numOfPassenger, start, end);

        if (fee < 0) {
            res.status(500).json({ error: 'Failed to add passenger to route' });
        } else {
            res.status(200).json({ fee: fee });
        }
    };

    getPassengerAllRoutes(req, res) {
        const orderModel = new oModel();
        const result = orderModel.getPassengerAllOrder(req.userId);

        if (result == false) {
            res.status(500).json({ error: 'Failed to get route information' });
        } else {
            res.status(200).json(result);
        }
    };

    getFee(req, res) {
        const { start, end } = req.body;

        if (!start || !end) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }

        const xDiff = end.x - start.x;
        const yDiff = end.y - start.y;

        const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);

        res.status(200).json({ fee: distance * 10 })
    };

    getDriverAllOrders(req, res) {
        const driverId = req.userId;

        const orderModel = new oModel();
        const result = orderModel.getDriverAllOrder(driverId);

        if (result == false) {
            res.status(500).json({ error: 'Failed to get route information' });
        }
        else {
            res.status(200).json(result);
        }
    };
}