const express = require("express");
const router = express.Router();

const controller = require("../controllers/routeController");
const jwt  = require("jsonwebtoken");

const routeController = new controller()
//define jwt auth middleware for /allRoutes
router.use('/allRoutes', (req, res, next) => {
    const header = req.headers["authorization"]
    console.log("allRoutes received header: ", header)
    let token = header && header.split(" ")[1]
    if (token.startsWith('"') && token.endsWith('"')) {
      // Remove the double quotes
      console.log("token before processing:", token)
      console.log("processing token")
      token = token.slice(1, -1);
      console.log("processed token:", token)
    } 
    if (token == null){ return res.sendStatus(401)}
    jwt.verify(token, process.env.tokenSecret, (err, user)=>{
        if (err) {return res.sendStatus(403)}
        req.user = user
        next()
    })
    
  })
router.get('/allRoutes', routeController.allRoutes)

module.exports = router