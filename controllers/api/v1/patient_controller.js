// Import the modules
const Patient = require('../../../models/patient');
const Report = require('../../../models/report');

exports.register= async (req, res) => {

  // Get id of the doctor of patient
  const doctor = req.doctor._id;      
    try {
      // Extract name and phone number of patient
      const { name, phone } = req.body;
      let patient;
      patient = await Patient.find({
        phone
      });
      
      //If patient exists
      if (patient.length > 0) {
        return res.status(200).json({
          success: true,
          body: patient[0]
        });
      }

      //Create new patient with name, phone and doctor's token
      patient = await Patient.create({
        name,
        phone,
        doctor
      });

      // Return response of succesful registeration of new patient
      return res.status(201).json({
        success: true,
        body: patient,
        msg:'Patient Registered Sucessfully!'
      });
    } catch (err) {
      return res.status(401).json({
        success: false,
        msg:'Error while registering new patient!'
      });
    }
  };

  