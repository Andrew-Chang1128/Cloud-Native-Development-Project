require("dotenv").config();
var cors = require('cors');
const express = require("express");

// const corsOptions = {
//     origin: [
//       'http://www.example.com',
//       'http://localhost:8080',
//     ],
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//     allowedHeaders: ['Content-Type', 'Authorization'],
//   };

// import express from "express";
class Server {
    constructor() {
        this.app = express();
        this.port = 4000;
        this.applyMiddleWares();
        this.addRoutes();
        this.start();
    }
    logRequest(req, res, next) {
        console.log(`Received request: ${req.method}, URL: ${req.url}`);
        next();
    }
    applyMiddleWares() {
        this.app.use(cors());
        this.app.use(express.json()); // Parse JSON request bodies
        this.app.use(this.logRequest); // Custom middleware
    }
    addRoutes() {
        const userRoute = require("./routes/user");
        this.app.use('/user', userRoute);
        const routesRoute = require("./routes/route");
        this.app.use('/route', routesRoute);
        const testapi = require("./routes/testapi")
        this.app.use('/testapi', testapi)
        const check = require("./routes/check")
        this.app.use('/check', check)
    }
    start() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
    close() {
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
