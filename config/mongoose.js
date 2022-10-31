// Connect to Mongodb database

const mongoose = require('mongoose');
require('dotenv').config();

let DB_URL = process.env.DB_URL
// console.log(DB_URL)

mongoose.connect( DB_URL, { useNewUrlParser:true ,useUnifiedTopology: true });
//mongoose.connect( DB_URL || 'mongodb://localhost/hospital_API', { useNewUrlParser:true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB DB"));

db.once('open', function () {
    console.log("Successfully connected to MongoDB DB");
});