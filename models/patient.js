// Import the module
const mongoose = require('mongoose');

// Define Patient Schema according to requirement - phone, name and doctor. Phone is unique identifier
const patientSchema = new mongoose.Schema({
    
  //phone number of maximum 10 digits
  phone: {
      type: Number,
      maxlength:10,
      required: true,
      unique:true,
  },
  name: {
      type: String,
      required:true,
  },
  doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Doctor'
  }
}, {
    timestamps: true
  });

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;