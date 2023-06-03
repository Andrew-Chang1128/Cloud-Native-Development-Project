const { MongoClient } = require("mongodb");
const uri = "mongodb://mongo:27017/";

const rModel = require('./routeModel');

module.exports = class {
    constructor() {
        this.client = new MongoClient(uri);
        this.database = this.client.db('cnp');
    };

    addPassengerToOrder(passengerId, routeId, datetime, numOfPassenger, start, end) {
        console.log("Adding Passenger", passengerId, " to ", routeId, numOfPassenger, start, end);
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
                resolve(sid);
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        })
    }

    getPassengerAllOrder(passengerId) {
        console.log("Fetching all orders of passenger: ", passengerId);
        return [{
            orderId: 0, routeId: 1, datetime: "2021-05-01 10:00:00",
            passenger: [
                {
                    subOrderId: 10, passengerId: passengerId, numOfPassenger: 2,
                    fee: 300, start: { loc: "起點", lat: 123, lng: 456 },
                    end: { loc: "終點", lat: 321, lng: 456 },
                    timestamp: "2021-05-01 10:00:00"
                },
                {
                    subOrderId: 11, passengerId: passengerId, numOfPassenger: 1,
                    fee: 700, start: { loc: "起點", lat: 123, lng: 456 },
                    end: { loc: "終點", lat: 321, lng: 456 },
                    timestamp: "2021-05-10 10:00:00"
                }
            ]
        }]
        return new Promise((resolve, reject) => {
        })
    }

    getDriverAllOrder(driverId) {
        console.log("Fetching all orders of driver: ", driverId);
        const routeModel = new rModel();
        const allDiverRoute = routeModel.getDiverRoute(driverId);
        return [{
            orderId: 0, routeId: 1, datetime: "2021-05-01 10:00:00",
            passenger: [
                {
                    subOrderId: 10, passengerId: 1, numOfPassenger: 2,
                    fee: 300, start: { loc: "起點", lat: 123, lng: 456 },
                    end: { loc: "終點", lat: 321, lng: 456 },
                    timestamp: "2021-05-01 10:00:00"
                },
                {
                    subOrderId: 11, passengerId: 2, numOfPassenger: 1,
                    fee: 700, start: { loc: "起點", lat: 123, lng: 456 },
                    end: { loc: "終點", lat: 321, lng: 456 },
                    timestamp: "2021-05-10 10:00:00"
                }
            ]
        }]
        return new Promise((resolve, reject) => {
        })
    }
}