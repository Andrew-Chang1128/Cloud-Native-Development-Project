const model = require("../models/itemModel")

module.exports= class driverController{
    item(req, res){
        const itemModel = new model
        //use itemModel to fetch data from db
        res.send("item");
    };
    async getAllItem(req, res){
        //use itemModel to fetch data from db
        const itemModel = new model();
        const items = await itemModel.getAllItem();
        // console.log(items);
        res.json(items);
    };
    async getUserItem(req, res){
        // get user from req.user set by auth
        const user = req.user;
        //use itemModel to fetch data from db
        const itemModel = new model();
        const items = await itemModel.getUserItem(user);
        // console.log(items);
        res.json(items);
    };
    async addItem(req, res){
        const user = req.user;
        const { itemID }= req.query;
        //use itemModel to fetch data from db
        const itemModel = new model();
        const userID = await itemModel.findUserIdByUsername(user);
        console.log(`userID parsed by ${user} is: ${userID}`)
        const result = await itemModel.addItem(userID, itemID);
        // console.log(items);
        if (result){
            res.send("successfuly add item to user")
        }else{
            res.send("error")
        }
    };
    
}