const express = require("express");
const router = express.Router();

const controller = require("../controllers/routeController");
const jwt  = require("jsonwebtoken");

const routeController = new controller()
//define jwt auth middleware for /allRoutes
router.use('/allRoutes', (req, res, next) => {
    const header = req.headers["authorization"]
    console.log(header)
    const token = header && header.split(" ")[1]
    if (token == null){ return res.sendStatus(401)}
    jwt.verify(token, process.env.tokenSecret, (err, user)=>{
        if (err) {return res.sendStatus(403)}
        req.user = user
        next()
    })
    
  })
router.get('/allRoutes', routeController.allRoutes)

module.exports = router