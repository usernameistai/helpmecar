const express  = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API running'));

const  port = process.env.PORT || 5000; // look for environment variable called PORT default to 5000

app.listen(port, () => console.log(`Server started on ${port}`));