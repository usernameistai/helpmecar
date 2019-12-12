const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // select('-password') leaves off the password in the data
    res.json(user);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth
// @desc    Authenticate user & get token (login)
// @access  Public
router.post('/', 
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ], 
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) { // if there are errors
      return res.status(400).json({ errors }); // send 400 and send back json error message
    }

    const { email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if(!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password); // bcrypt has a method called compare

      if(!isMatch) {
        return res
        .status(400)
        .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      // Return jsonwebtoken
      const payload = { // payload is the second part of the jwt
        user: {
          id: user.id // mongodb uses _id, mongoose uses abstraction
        }
      };

      jwt.sign(
        payload, 
        config.get('jwtSecret'),
        { expiresIn: 36000 },
        (err, token) => {// the callback function
        if(err) throw err;
        res.json({ token });
      });
      
    } catch(err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
});

module.exports = router;