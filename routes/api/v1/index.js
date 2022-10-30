// Importing the modules
const express= require('express');
const router = express.Router();

console.log("Router index file is loaded");

// route for /doctors, /patients, /reports
router.use('/doctors', require('./doctors'));
router.use('/patients', require('./patients'));
router.use('/reports', require('./reports'));

module.exports = router;