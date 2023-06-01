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
  
    getAllItem(){
        const query = 'SELECT * from uniqlo_product;';
        return new Promise((resolve, reject) => {
          this.connection.query(query, (err, result) => {
            if (err) {
                console.error('Error inserting user information:', err);
                reject("Error creating user into  the database!");
            }else{
                resolve(result);
            }
          });
        })
    };
    getUserItem(userID){
        console.log(`query with userID ${userID}`);
        const query = 'SELECT uniqlo_product.* from uniqlo_product \
                       JOIN userItem ON userItem.itemId =  uniqlo_product.id\
                       WHERE userItem.userId = ?';
        return new Promise((resolve, reject) => {
          this.connection.query(query,[userID], (err, result) => {
            if (err) {
                console.error('Error querying user information:', err);
                reject(false);
            }else{
                resolve(result);
            }
          });
        })
    };
    addItem(userID, itemID){
        console.log(`addItem w userID" ${userID},itemID: ${itemID} `);
        const query = 'INSERT INTO userItem (userId, itemId) VALUES (?, ?)';
        return new Promise((resolve, reject) => {
          this.connection.query(query, [userID, itemID], (err, result) => {
            if (err) {
                console.error('Error adding item', err);
                reject(false);
            }else{
                resolve(true);
            }
          });
        })
    };
}