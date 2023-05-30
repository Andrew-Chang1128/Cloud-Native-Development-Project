const model = require("../models/userModel")
// const userModel = new model()

module.exports= class userController{
    constructor(){
        console.log("creating userModel")
        this.userModel = new model();
        // console.log(this.userModel);
    };
    user(req, res){
        //use userModel to fetch data from db
        res.send("user");
    };
    alluser(req, res){
        //use userModel to fetch data from db
        res.send("alluser");
    };
    async login(req, res){
        console.log("name: ", req.body.username,"password: ",req.body.password)
        const userModel = new model();
        const { username, password } = req.body;
        const result = await userModel.login(username, password,res);
        // console.log("fetch result: ",result);
        // if (result == password){
        //     const user = {"user": username};
        //     // console.log(process.env.tokenSecret);
        //     const jwtToken = jwt.sign(user, process.env.tokenSecret);
        //     res.json(jwtToken)
        // }else{
        //     res.status(400).send("Unauthorized!")
        // }
    };
    createUser(req, res){
        // const conResult = userModel.connection.connect();
        // console.log(this.userModel)
        const userModel = new model();
        userModel.connection.connect((err) => {
            if (err) {
              console.error('Error connecting to the database:', err);
              return;
            }
            console.log('Connected to the database');
          });

        const { username, password } = req.body;
        // Insert user information into the users table
        const result = userModel.queryPassword(username, password);
        if (result == false){
            res.status(500).json({ error: 'Failed to insert user information' });
        }else{
            res.status(200).json({ message: 'User information inserted successfully' });
        }
    };

}