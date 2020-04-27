const mongoose = require('mongoose');

const RegPlateSchema = new mongoose.Schema({
  regplate: {
    type: String,
    required: true,
    default: null // added default: null later
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Regplate = mongoose.model('regplate', RegPlateSchema);