// Importing the modules
const express= require('express');
const router = express.Router();

// Importing the doctor controller
const doctorController = require('../../../controllers/api/v1/doctor_controller');

// route for /doctors/register
router.post('/register', doctorController.register);

// route for /doctors/login
router.post('/login', doctorController.login);

module.exports = router;