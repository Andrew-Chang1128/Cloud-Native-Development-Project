require("dotenv").config();
const express = require("express");
// import express from "express";
class Server {
    constructor(){
        this.app = express();
        this.port = 5000;
        this.applyMiddleWares();
        this.addRoutes();
        this.start();
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
        const driverRoute = require("./routes/driver");
        this.app.use('/driver',driverRoute);
        const userRoute = require("./routes/user");
        this.app.use('/user',userRoute);
        const routesRoute = require("./routes/route");
        this.app.use('/',routesRoute);
    }
    start(){
        this.server = this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
    close(){
        console.log("Closing the server...");
        this.server.close((err) => {
            if (err) {
                // console.error("Error occurred while closing the server:", err);
            } else {
                // console.log("Server closed successfully.");
            }
        });
    }
}

const server = new Server();
exports.server = server

const name = "John"
obj = {[name]:"david",password:"123"};
console.log(obj)
jobj = JSON.stringify(obj)
console.log(jobj)

