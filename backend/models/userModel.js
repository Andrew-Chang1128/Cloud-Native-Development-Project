const { MongoClient } = require("mongodb");
const uri = "mongodb://mongo:27017/";

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
                const id = row[0].id + 1;
                const data = {
                    id: id,
                    name: name,
                    email: email.toString(),
                    password: password.toString(),
                    avgStar: 0
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
}