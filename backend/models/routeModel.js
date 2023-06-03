const { MongoClient } = require("mongodb");
const uri = "mongodb://mongo:27017/";

module.exports = class {
    constructor() {
        this.client = new MongoClient(uri);
        this.database = this.client.db('cnp');
    };

    createRoute(driverId, dayOfWeek, maxNumOfPassenger, startTime, routeList) {
        console.log("Creating route with: ", driverId, dayOfWeek, maxNumOfPassenger, startTime, routeList);
        return new Promise(async (resolve, reject) => {
            try {
                const route = this.database.collection('route');
                const row = await route.find({}).sort({"routeId":-1}).limit(1).toArray();
                const id = row[0].routeId + 1;
                const data = {
                    routeId: id,
                    driverId: driverId,
                    dayOfWeek: dayOfWeek,
                    maxNumOfPassenger: maxNumOfPassenger,
                    startTime: startTime,
                    routeList: routeList
                };
                console.log('data', data);
                const result = await route.insertOne(data);
                console.log('result', result);
                if(!result.acknowledged) resolve(-1);
                resolve(id);
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        })
    }

    getAllRoute() {
        console.log("Fetching all routes");
        return new Promise(async (resolve, reject) => {
            try {
                const route = this.database.collection('route');
                const query = {};
                const data = await route.find(query).toArray();
                console.log('data', data);
                if(!data) resolve([]);
                resolve(data);
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        })
    };

    getDiverId(routeId) {
        console.log("Fetching driver with: ", routeId);
        return new Promise(async (resolve, reject) => {
            try {
                const route = this.database.collection('route');
                const query = {
                    routeId: routeId
                };
                const data = await route.findOne(query);
                console.log('data', data);
                if(!data) resolve(-1);
                resolve(data.driverId);
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        })
    };

    getDiverRoute(driverId) {
        console.log("Fetching route with: ", driverId);
        return new Promise(async (resolve, reject) => {
            try {
                const route = this.database.collection('route');
                const query = {
                    driverId: driverId
                };
                const data = await route.find(query).toArray();
                console.log('data', data);
                if(!data) resolve([]);
                resolve(data);
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        })
    }
}