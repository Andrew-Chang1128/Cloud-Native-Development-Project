

const model = require("../models/driverModel")
const driverModel = new model
const route = {
    david: "david's route",
    frank: "frank's route"
}
module.exports= class routeController{
    allRoutes(req, res){
        //use userModel to fetch data from db
        res.send(route["david"]);
    };

    log(){
        console.log("log from routeController class")
    };
   
}