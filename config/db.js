const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); // should get value form db.js

const connectDB = async () => {
  try {
    await mongoose.connect(
      db, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true ,
        useFindAndModify: false // may not need it
    }); 
    // returns a promise so can put await in front of it, have to add the above objects otehrwise get depracation warnings
    console.log('MongoDB connected');
  } catch(err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB;