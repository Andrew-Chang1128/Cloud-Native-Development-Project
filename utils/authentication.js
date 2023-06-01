const jwt  = require("jsonwebtoken");

const authentication = (req, res, next) => {
    const header = req.headers["authorization"]
    let token = header && header.split(" ")[1]
    if (token == null){ return res.sendStatus(401)}
    console.log("authorization received header: ", header)
      if (token.startsWith('"') && token.endsWith('"')) {
        // Remove the double quotes
        console.log("token before processing:", token)
        console.log("processing token")
        token = token.slice(1, -1);
        console.log("processed token:", token)
      } 
      jwt.verify(token, process.env.tokenSecret, (err, user)=>{
          if (err) {return res.sendStatus(403)}
          console.log(`parsed user: ${user.user}`)
          req.user = user.user
          next()
      })
  };

exports.auth = authentication;