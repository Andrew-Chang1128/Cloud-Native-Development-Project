const model = require("../models/userModel")
const userModel = new model

module.exports= class userController{
    user(req, res){
        //use userModel to fetch data from db
        res.send("user");
    };
    alluser(req, res){
        //use userModel to fetch data from db
        res.send("alluser");
    };
}