// Import the modules
const Doctor=require('../../../models/doctor');
const jwt=require('jsonwebtoken');

// Register the doctor
module.exports.register = async function(req,res) {
  try {
    const doctor = await Doctor.create(req.body);
      
      return res.status(200).json({
          success: true,
          message:doctor
      });

  } catch (err) {
      return res.status(500).json({
          success: false,
          message:err.message
      });
  }
}

// Doctor Login
module.exports.login= async (req, res)=>{
  try {

    let { email, password } = req.body;

    // Email or Password missing
    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        msg:'No email or password'
      });
    }

    // Email is invalid/does not exist in DB
    let doctor = await Doctor.findOne({ email: email });
    if (!doctor) {
      return res.status(401).json({ 
        success: false, 
        msg: "Invalid Username or Password!" 
      });
    }

    // Check if password matches
    const isMatch = await doctor.matchPassword(password);
    // Error handling if password does not match
    if (!isMatch) {
      return res.status(401).json({ 
        success: false, 
        msg: "Invalid Username or Password!" 
      });
    }

    // Get JWT token
    const token = doctor.getSignedJwtToken();

    // Return response on successful login
    res.status(200).json({
      success: true,
      token,
      msg: `Log In Sucessful! Here is your Token ${doctor.username} Keep it safe!`
    });

  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      msg:'Error Occoured!'
    });
  }
}
