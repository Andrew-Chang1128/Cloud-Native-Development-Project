module.exports = class {
    constructor() {
    };

    createRoute(driverId, dayOfWeek, maxNumOfPassenger, startTime, routeList) {
        console.log("Creating route with: ", driverId, dayOfWeek, maxNumOfPassenger, startTime, routeList);
        return 1; // routeId
        return new Promise((resolve, reject) => {
        })
    }

    getAllRoute() {
        console.log("Fetching all routes");
        return [{
            routeId: 0, driverId: 1, dayOfWeek: ["Sunday", "Tuesday"],
            maxNumOfPassenger: 4, startTime: "2021-05-01 10:00",
            routeList: [{ loc: "起點", lat: 11, lng: 12 }, { loc: "停靠點", lat: 21, lng: 22 }, { loc: "終點", lat: 31, lng: 32 }]
        }, {
            routeId: 1, driverId: 2, dayOfWeek: ["Monday", "Tuesday"],
            maxNumOfPassenger: 2, startTime: "2021-05-01 20:00",
            routeList: [{ loc: "起點", lat: 11, lng: 12 }, { loc: "停靠點", lat: 21, lng: 22 }, { loc: "終點", lat: 31, lng: 32 }]
        }]
        return new Promise((resolve, reject) => {
        })
    };

    getDiverId(routeId) {
        console.log("Fetching driver with: ", routeId);
        return 0; // driverId
        return new Promise((resolve, reject) => {
        })
    };

    getDiverRoute(driverId) {
        console.log("Fetching route with: ", driverId);
        return [{
            routeId: 0, driverId: driverId, dayOfWeek: ["Sunday", "Tuesday"],
            maxNumOfPassenger: 4, startTime: "2021-05-01 10:00",
            routeList: [{ loc: "起點", lat: 11, lng: 12 }, { loc: "停靠點", lat: 21, lng: 22 }, { loc: "終點", lat: 31, lng: 32 }]
        }, {
            routeId: 1, driverId: driverId, dayOfWeek: ["Monday", "Tuesday"],
            maxNumOfPassenger: 2, startTime: "2021-05-01 20:00",
            routeList: [{ loc: "起點", lat: 11, lng: 12 }, { loc: "停靠點", lat: 21, lng: 22 }, { loc: "終點", lat: 31, lng: 32 }]
        }]
        return new Promise((resolve, reject) => {
        })
    }
}