const { MongoClient } = require("mongodb");
const uri = process.env.mongoUri;
console.log(`mongoUri: ${uri}`)
module.exports = class {
    constructor() {
        this.client = new MongoClient(uri);
        this.database = this.client.db('cnp');
    };

    checkUserExist(email) {
        console.log("checking user exist with: ", email);
        return new Promise(async (resolve, reject) => {
            try {
                const user = this.database.collection('user');
                const query = {
                    email: email.toString()
                };
                console.log('query', query);
                const data = await user.findOne(query);
                //console.log('data', data);
                if (!data) resolve(false);
                else resolve(true);
                return;
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        })
    }

    createUser(name, email, password) {
        console.log("creating user with: ", name, email, password);
        return new Promise(async (resolve, reject) => {
            try {
                const user = this.database.collection('user');
                const row = await user.find({}).sort({ "id": -1 }).limit(1).toArray();
                const id = (row[0].id + 1) || 1;
                const data = {
                    id: id,
                    name: name,
                    email: email.toString(),
                    password: password.toString(),
                    stars: []
                };
                console.log('data', data);
                const result = await user.insertOne(data);
                console.log('result', result);
                if (!result.acknowledged) resolve(false);
                else resolve(true);
                return;
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        })
    };

    login(email, password) {
        console.log("login with: ", email, password);
        return new Promise(async (resolve, reject) => {
            try {
                const user = this.database.collection('user');
                const query = {
                    email: email.toString(),
                    password: password.toString()
                };
                console.log('query', query);
                const data = await user.findOne(query);
                console.log('data', data);
                if (!data) resolve(-1);
                else resolve(data.id);
                return;
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        });
    };

    user(userId) {
        console.log("Get user with: ", userId);
        return new Promise(async (resolve, reject) => {
            try {
                const user = this.database.collection('user');
                const query = {
                    id: userId
                };
                console.log('query', query);
                const data = await user.findOne(query);
                console.log('data', data);
                if (!data) resolve(-1);
                else resolve(data);
                return;
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        })
    };

    star(userId, orderId, rate) {
        console.log("Star user with: ", orderId, rate);
        return new Promise(async (resolve, reject) => {
            try {
                const user = this.database.collection('user');
                const route = this.database.collection('route');
                const order = this.database.collection('order');
                var query = {
                    orderId: orderId
                };
                console.log('query', query);
                const data = await order.findOne(query);
                if (!data) {
                    resolve(false);
                    return;
                }
                console.log('data', data);
                query = {
                    routeId: data.routeId
                };
                console.log('query', query);
                const data2 = await route.findOne(query);
                if (!data2) {
                    resolve(false);
                    return;
                }
                console.log('data2', data2);

                query = {
                    id: data2.driverId
                };
                const command = {
                    $push: {
                        stars: rate
                    }
                }
                const options = { upsert: false };
                const result = await user.updateOne(query, command, options);
                console.log('result', result);
                if (result.modifiedCount == 0) resolve(false);
                else resolve(true);
                return;
            } catch (err) {
                console.error('Error:', err);
            }
            reject(false);
        })
    };
}