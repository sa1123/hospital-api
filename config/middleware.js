// Import the modules
const jwt = require('jsonwebtoken');
const Doctor = require("../models/doctor")

//Format of token -- Authorizaiton : Bearer <access_token>

//Token verification
exports.verifyToken = async (req, res, next) => {

    console.log("Bearer Token"+req.headers['authorization']);
  let token;
  
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
      req.token = token;
    }

    //Token is missing gives 401 error
    
    if (!token) {
      console.log("Token Error");
      return res.status(401).json({
        success: false,
        message: "Unauthorized access"
      });
    }
  
    try {

      const decoded = await jwt.verify(token, 'secret');
      console.log("DECODED TOKEN : "+decoded);
     
      req.doctor = await Doctor.findById(decoded.id);
      next();


    } catch (err) {
      console.log(err);
      return res.status(401).json({
        success: false,
        message: "Unauthroized access"
      });
    }
  };

