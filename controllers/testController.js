const oModel = require('../models/orderModel');
const uModel = require('../models/userModel');
const rModel = require('../models/routeModel');

module.exports = class testController {
    constructor() {
        console.log("creating testController")
    }


    // user model
    async checkUserExist(req, res) {
        console.log("/test/checkUserExist");

        const { email } = req.body;
        if (!email) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }
        const userModel = new uModel();
        const result = await userModel.checkUserExist(email);
        if (result == false) {
            res.status(400).json({ error: 'User does not exist' });
        } else {
            res.status(200).json({ message: 'User exist' });
        }
    }

    async createUser(req, res) {
        console.log("/test/createUser");

        const userModel = new uModel();

        const { email, password } = req.body;
        if (!email || !password) {
            res.status(422).json({ error: 'inappropriate parameters' })
        }
        // Insert user information into the users table
        const existResult = await userModel.checkUserExist(email);
        if (existResult) {
            res.status(500).json({ error: 'User already exist' });
            return;
        }
        const result = await userModel.createUser(email, password);
        if (result == false) {
            res.status(500).json({ error: 'Failed to insert user information' });
        } else {
            res.status(200).json({ message: 'User information inserted successfully' });
        }
    }

    async login(req, res) {
        console.log("/test/login");

        const { email, password } = req.body;
        if (!email || !password) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }
        const userModel = new uModel();
        const result = await userModel.login(email, password);
        if (result == false) {
            res.status(400).json({ error: 'Wrong email or password' });
        } else {
            const jwtToken = result;
            console.log(`jwtToken returned is:${jwtToken}`);
            res.json(jwtToken);
        }
    }

    async getUserId(req, res) {
        console.log("/test/getUserId");

        const { email } = req.body;
        if (!email) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }
        const userModel = new uModel();
        const result = await userModel.getUserId(email);
        if (result < 0) {
            res.status(400).json({ error: 'No user found' });
        } else {
            res.status(200).json(result);
        }
    }

    // route model
    async createRoute(req, res) {
        console.log("/test/createRoute");

        const { driverId, dayOfWeek, maxNumOfPassenger, startTime, routeList } = req.body;
        if (!driverId || !dayOfWeek || !maxNumOfPassenger || !startTime || !routeList) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }
        const routeModel = new rModel();
        const routeId = await routeModel.createRoute(driverId, dayOfWeek, maxNumOfPassenger, startTime, routeList);
        if (routeId < 0) {
            res.status(500).json({ error: 'Failed to insert route information' });
        } else {
            console.log(`routeId returned is:${routeId}`);
            res.status(200).json({ message: 'Route information inserted successfully' });
        }
    }

    async getDiverRoute(req, res) {
        console.log("/test/getDiverRoute");

        const { driverId } = req.body;
        if (!driverId) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }
        const routeModel = new rModel();
        const result = await routeModel.getDiverRoute(driverId);
        if (result == false) {
            res.status(400).json({ error: 'No route found' });
        } else {
            res.status(200).json(result);
        }
    }

    async getAllRoute(req, res) {
        console.log("/test/getAllRoute");

        const routeModel = new rModel();
        const result = await routeModel.getAllRoute();
        if (result == false) {
            res.status(400).json({ error: 'No route found' });
        } else {
            res.status(200).json(result);
        }
    }

    async getDiverId(req, res) {
        console.log("/test/getDiverId");

        const { routeId } = req.body;
        if (!routeId) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }
        const routeModel = new rModel();
        const result = await routeModel.getDiverId(routeId);
        if (result < 0) {
            res.status(400).json({ error: 'No route found' });
        } else {
            res.status(200).json(result);
        }
    }

    async addPassengerToOrder(req, res) {
        console.log("/test/addPassengerToOrder");

        const { passengerId, routeId, numOfPassenger, start, end } = req.body;
        if (!passengerId || !routeId || !numOfPassenger || !start || !end) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }
        const orderModel = new oModel();
        const fee = await orderModel.addPassengerToOrder(passengerId, routeId, numOfPassenger, start, end);
        if (fee == false) {
            res.status(500).json({ error: 'Failed to insert order information' });
        } else {
            console.log(`fee returned is:${fee}`);
            res.status(200).json({ message: 'Order information inserted successfully' });
        }

    }

    async getPassengerAllOrder(req, res) {
        console.log("/test/getPassengerAllOrder");

        const { passengerId } = req.body;
        if (!passengerId) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }
        const orderModel = new oModel();
        const result = await orderModel.getPassengerAllOrder(passengerId);
        if (result == false) {
            res.status(400).json({ error: 'No order found' });
        } else {
            res.status(200).json(result);
        }
    }

    async getDriverAllOrder(req, res) {
        console.log("/test/getDriverAllOrder");

        const { driverId } = req.body;
        if (!driverId) {
            res.status(422).json({ error: 'inappropriate parameters' });
            return;
        }
        const orderModel = new oModel();
        const result = await orderModel.getDriverAllOrder(driverId);
        if (result == false) {
            res.status(400).json({ error: 'No order found' });
        } else {
            res.status(200).json(result);
        }
    }
}