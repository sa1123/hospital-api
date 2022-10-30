// Import the modules
const mongoose = require('mongoose');

// Define Report Schema according to requirement - doctor, patient, status, date
const reportSchema = new mongoose.Schema({
    
  doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor'
  },

  patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient'
  },

  // Chosen from options given below
  status: {
      type: String,
      required: true,
      enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
  },
  
  // Automatically appends current date
  date: {
      type: Date,
      default: Date.now,
     required:true,
  }
},
  {
  timestamps: true
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;