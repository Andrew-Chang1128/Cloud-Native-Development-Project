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
    findUserIdByUsername(username) {
      return new Promise((resolve, reject) => {
        const query = 'SELECT user_id FROM users WHERE name = ?';
        this.connection.query(query, [username], (error, results) => {
          if (error) {
            reject(error);
          } else {
            if (results.length > 0) {
              const userId = results[0].user_id;
              resolve(userId);
            } else {
              reject('User not found');
            }
          }
        });
      });
    }
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
    getUserItem(user){
      console.log(`query with username ${user}`);
      const query = 'SELECT uniqlo_product.* from uniqlo_product \
                     JOIN userItem JOIN users ON userItem.itemId  =  uniqlo_product.id\
                     and userItem.userId = users.user_id\
                     WHERE users.name = ?';
      return new Promise((resolve, reject) => {
        this.connection.query(query,[user], (err, result) => {
          if (err) {
              console.error('Error querying user information:', err);
              reject(false);
          }else{
              console.log(`result: ${result}`)
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