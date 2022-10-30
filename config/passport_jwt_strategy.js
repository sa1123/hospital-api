// Passport JWT configuration

// Import the modules and models
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/doctor');

// Passport Authentication
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secrethospitalkey"
}

//Using JWT Token to find doctor
passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    Doctor.findById(jwtPayLoad._id, function(err, user){
        if (err){
            console.log('Error in finding doctor from JWT'); 
            return done(err,false);}

        if (user){
            return done(null, user);
        }else{return done(null, false);}
    })
}));

module.exports = passport;