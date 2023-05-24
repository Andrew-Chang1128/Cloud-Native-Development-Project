const model = require("../models/driverModel")
const driverModel = new model

module.exports= class driverController{
    driver(req, res){
        //use driverModel to fetch data from db
        res.send("driver");
    };
    allDriver(req, res){
        //use driverModel to fetch data from db
        res.send("allDriver");
    };
}