const { MongoClient } = require("mongodb");
const uri = process.env.mongoUri;
console.log(`mongoUri: ${uri}`)
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
                const id = (row[0].routeId + 1) || 1;
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
                if(!result.acknowledged) {
                    resolve(-1);
                    return;
                }

                const order = this.database.collection('order');
                const orow = await order.find({}).sort({"orderId":-1}).limit(1).toArray();
                var oid = (orow[0].orderId + 1) || 1;

                const daymap = {'SUNDAY': 0, 'MONDAY': 1, 'TUESDAY': 2, 'WEDNESDAY': 3, 'THURSDAY': 4, 'FRIDAY': 5, 'SATURDAY': 6};
                var odata = []
                for (var i = 0; i < 2; i++) {
                    for (let d of dayOfWeek) {
                        var date = new Date(startTime);
                        date.setDate(date.getDate() + (daymap[d.toUpperCase()] + 7 - date.getDay()) % 7 + i * 7);
                        const tmp = {
                            orderId: oid,
                            routeId: id,
                            datetime: date.toISOString(),
                            passenger: []
                        };
                        odata.push(tmp);
                        oid += 1;
                    }
                }
                console.log('odata', odata);
                const oresult = await order.insertMany(odata);

                resolve(id);
                return;
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
                else resolve(data);
                return;
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
                else resolve(data.driverId);
                return;
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
                else resolve(data);
                return;
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        })
    }
}