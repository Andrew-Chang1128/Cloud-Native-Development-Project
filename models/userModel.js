const jwt = require("jsonwebtoken")

mysql = require('mysql2');
module.exports = class {
    constructor(){
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'test',
            password: 'password',
            database: 'STproject',
        });
    };
  
    createUser(username, password){
      console.log("inserting w ", username, password);
      const query = 'INSERT INTO users (name, password) VALUES (?, ?)';
      return new Promise((resolve, reject) => {
        this.connection.query(query, [username, password], (err, result) => {
          if (err) {
              console.error('Error inserting user information:', err);
              reject(false);
          }else{
              resolve(true);
          }
          
        });
      })
    };
    login(username, password){
        console.log("fetching result with: ",username);
        const query = 'SELECT * FROM users WHERE name = ?';
        return new Promise((resolve, reject) => {
            this.connection.query(query, [username], (err, results) => {
              if (err) {
                console.error('Error fetching user from the database:', err);
                reject("Error fetching user from the database!");
              } else {
                const returnPwd = results[0].password;
                console.log("fetched pwd: ", returnPwd);
                if (returnPwd == password) {
                  const user = { user: username };
                  const jwtToken = jwt.sign(user, process.env.tokenSecret);
                  resolve(jwtToken);
                } else {
                  reject(false);
                }
              }
            });
          });
        // this.connection.query(query, [username],  async (err, results) => {
        //     // console.log("fetched data: ",results);
        //     const returnPwd = results[0].password;
        //     if (err) {
        //         console.error('Error fetching user from the database:', err);
        //         res.status(500).send("Error fetching user from the database!")
                
        //     }else{
        //         console.log("fetched pwd: ",returnPwd);
        //         if (returnPwd == password){
        //             const user = {"user": username};
        //             // console.log(process.env.tokenSecret);
        //             const jwtToken = jwt.sign(user, process.env.tokenSecret);
        //             return jwtToken;
        //             // res.json(jwtToken)
        //         }else{
        //             return false;
        //             // res.status(400).send("Unauthorized!")
        //         }
                
        //     }

        // })

    };
}