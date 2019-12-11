git init
npm init

npm i --save express express-validator bcryptjs config gravatar jsonwebtoken mongoose request

npm i --save-dev nodemon concurrently

this time round appears to be done differently to last time

made server.js /config folder in that default.json and db.js

====== db.js
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); // should get value form db.js

const connectDB = async () => {
  try {
    await mongoose.connect(
			db,
			{ 
				useNewUrlParser: true,
				useUnifiedTopology: true 
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

module.exports = connectDB;
====== default.json
{
	"mongoURI": "the connecting string"
}
====== server.js
