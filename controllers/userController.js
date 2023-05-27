const model = require("../models/userModel")
const jwt = require("jsonwebtoken")
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
    login(req, res){
        // console.log("name: ", req.body.username,"password: ",req.body.password)
        if (req.body.username == "david" && req.body.password == "123"){
            const username = req.body.username;
            const user = {"user": username};
            // console.log(process.env.tokenSecret);
            const jwtToken = jwt.sign(user, process.env.tokenSecret);
            res.json(jwtToken)
        }else{
            res.status(400).send("Unauthorized!")
        }
        
    };
}