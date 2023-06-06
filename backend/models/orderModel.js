const { MongoClient } = require("mongodb");
const uri = "mongodb://mongo:27017/";

const rModel = require('./routeModel');

module.exports = class {
    constructor() {
        this.client = new MongoClient(uri);
        this.database = this.client.db('cnp');
    };

    addPassengerToOrder(passengerId, routeId, datetime, numOfPassenger, start, end, fee) {
        console.log("Adding Passenger", passengerId, " to ", routeId, datetime, numOfPassenger, start, end, fee);
        return new Promise(async (resolve, reject) => {
            try {
                var dstart = new Date(datetime);
                dstart.setHours(0, 0, 0, 0);
                var dend = new Date(dstart);
                dend.setDate(dstart.getDate() + 1);
                const order = this.database.collection('order');
                const query = {
                    routeId: routeId,
                    datetime: {
                        $gte: dstart.toISOString(),
                        $lt: dend.toISOString()
                    }
                };
                const row = await order.findOne(query);
                console.log("row", row);
                if (!row) {
                    resolve(false);
                    return;
                }
                // const id = row[0].routeId + 1;

                const command = {
                    $push: {
                        passenger: {
                            subOrderId: 0,
                            passengerId: passengerId,
                            numOfPassenger: numOfPassenger,
                            start: start,
                            end: end,
                            timestamp: new Date().toISOString(),
                            fee: fee
                        }
                    }
                }
                const options = { upsert: false };
                const result = await order.updateOne(query, command, options);
                console.log('result', result);
                // if(!result.acknowledged) resolve(-1);
                // resolve(sid);
                if (!result.acknowledged) resolve(false);
                else resolve(true);
                return;
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        })
    }

    getPassengerAllOrder(passengerId) {
        console.log("Fetching all orders of passenger: ", passengerId);
        return new Promise(async (resolve, reject) => {
            try {
                const order = this.database.collection('order');
                // const query = {
                //     passenger: {
                //         $elemMatch: 
                //         {
                //             passengerId: passengerId
                //         }
                //     }
                // };
                const pipeline = [
                    {
                        $match: {
                            passenger: {
                                $elemMatch: {
                                    passengerId: passengerId
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            passenger: {
                                $filter: {
                                    input: "$passenger",
                                    cond: {
                                        $eq: [
                                            "$$this.passengerId",
                                            passengerId
                                        ]
                                    }
                                }
                            }
                        }
                    }
                ];
                const data = await order.aggregate(pipeline).toArray();
                console.log('data', data);
                if (!data) resolve([]);
                else resolve(data);
                return;
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        })
    }

    getDriverAllOrder(driverId) {
        console.log("Fetching all orders of driver: ", driverId);
        return new Promise(async (resolve, reject) => {
            try {
                const route = this.database.collection('route');
                const pipeline = [
                    {
                        $match: {
                            'driverId': driverId
                        }
                    }
                    ,
                    {
                        $lookup: {
                            from: "order",
                            localField: "routeId",
                            foreignField: "routeId",
                            as: "order"
                        }
                    }
                    ,
                    {
                        $project: {
                            _id: 0,
                            order: 1
                        }
                    },
                    {
                        $unwind: "$order"
                    },
                    {
                        $replaceRoot: {
                            newRoot: "$order"
                        }
                    }
                ];
                const data = await route.aggregate(pipeline).toArray();
                console.log('data', data);
                if (!data) resolve([]);
                else resolve(data);
                return;
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        })
    }

    getRouteOrder(routeId) {
        console.log("Fetching all orders of route: ", routeId);
        return new Promise(async (resolve, reject) => {
            try {
                const order = this.database.collection('order');
                const query = {
                    routeId: routeId
                };
                const data = await order.find(query).toArray();
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