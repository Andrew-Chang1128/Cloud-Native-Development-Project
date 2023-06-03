const rModel = require('./routeModel');

module.exports = class {
    constructor() {
    };

    addPassengerToOrder(passengerId, routeId, datetime, numOfPassenger, start, end) {
        console.log("Adding Passenger", passengerId, " to ", routeId, numOfPassenger, start, end);
        return True;
        return new Promise((resolve, reject) => {
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