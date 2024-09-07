const express  = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false })); // should allow us to get data in req.body

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/reg', require('./routes/api/reg'));

// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
  // anything aside from API routes above load , from current directory, got to client folder into build folder and load index.html
}

const  port = process.env.PORT || 5000; // look for environment variable called PORT default to 5000

app.listen(port, () => console.log(`Server started on ${port}`));

// MAKING A CHANGE FOR NEW DEPLOYMENYT SO CAN UPGRADE STACK