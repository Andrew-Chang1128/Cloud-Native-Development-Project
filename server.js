const express = require("express");

class Server {
    constructor(){
        this.app = express();
        this.port = 5000;
        this.applyMiddleWares();
        this.addRoutes();
        this.start()
    }
    logRequest(req, res, next) {
        console.log(`Received request: ${req.method}`);
        next();
    }
    applyMiddleWares(){
        this.app.use(express.json()); // Parse JSON request bodies
        this.app.use(this.logRequest); // Custom middleware
    }
    addRoutes(){
        const homeRoute = require("./routes/home")
        this.app.use('/home',homeRoute)
        const userRoute = require("./routes/user")
        this.app.use('/user',userRoute)
       
    }
    start(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

const server = new Server();
