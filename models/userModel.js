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
  
    queryPassword(username, password){
        console.log("inserting w ", username, password);
        const query = 'INSERT INTO users (name, password) VALUES (?, ?)';
        this.connection.query(query, [username, password], (err, result) => {
            if (err) {
                console.error('Error inserting user information:', err);
                return false;
            }else{
                return true;
            }
            
        });
    };
    async login(username, password, res){
        console.log("fetching result with: ",username);
        const query = 'SELECT * FROM users WHERE name = ?';
        this.connection.query(query, [username],  (err, results) => {
            // console.log("fetched data: ",results);
            const returnPwd = results[0].password;
            if (err) {
                console.error('Error fetching user from the database:', err);
                res.status(500).send("Error fetching user from the database!")
                
            }else{
                console.log("fetched pwd: ",returnPwd);
                if (returnPwd == password){
                    const user = {"user": username};
                    // console.log(process.env.tokenSecret);
                    const jwtToken = jwt.sign(user, process.env.tokenSecret);
                    res.json(jwtToken)
                }else{
                    res.status(400).send("Unauthorized!")
                }
                return password;
            }

        })

    };
}