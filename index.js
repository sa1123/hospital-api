// Importing the modules
const express = require('express');
// App is running at port 5000
const port = process.env.PORT || 5000;
const db = require('./config/mongoose');

const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

//Redirecting routes
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) { console.log('error'); return; }
    
    console.log(`server is running on ${port}`);
});
