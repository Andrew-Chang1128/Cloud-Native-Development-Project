const jwt = require("jsonwebtoken")

// mysql = require('mysql2');
module.exports = class {
    constructor() {
        // this.connection = mysql.createConnection({
        //     host: 'localhost',
        //     user: 'test',
        //     password: 'password',
        //     database: 'STproject',
        // });
    };

    checkUserExist(email) {
        console.log("checking user exist with: ", email);
        return false;
        return new Promise((resolve, reject) => {
            // this.connection.query(query, [username, password], (err, result) => {
            //   if (err) {
            //       console.error('Error inserting user information:', err);
            //       reject(false);
            //   }else{
            //       resolve(true);
            //   }
            // });
            // reject(false);
        })
    }

    createUser(email, password) {
        console.log("creating user with: ", email, password);
        return true;
        // const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
        return new Promise((resolve, reject) => {
            // this.connection.query(query, [email, password], (err, result) => {
            //     if (err) {
            //         console.error('Error inserting user information:', err);
            //         reject(false);
            //     } else {
            //         resolve(true);
            //     }
            // });
        })
    };

    login(email, password) {
        console.log("login with: ", email, password);
        const user = { user: email };
        const jwtToken = jwt.sign(user, process.env.tokenSecret);
        return jwtToken;
        // const query = 'SELECT * FROM users WHERE email = ?';
        return new Promise((resolve, reject) => {
            // this.connection.query(query, [email], (err, results) => {
            //     if (err) {
            //         console.error('Error fetching user from the database:', err);
            //         reject("Error fetching user from the database!");
            //     } else {
            //         const returnPwd = results[0].password;
            //         console.log("fetched pwd: ", returnPwd);
            //         if (returnPwd == password) {
            //             const user = { user: email };
            //             const jwtToken = jwt.sign(user, process.env.tokenSecret);
            //             resolve(jwtToken);
            //         } else {
            //             reject(false);
            //         }
            //     }
            // });
        });
    };

    getUserId(email) {
        console.log("getUserId with: ", email);
        return 1; // userid
    }
}