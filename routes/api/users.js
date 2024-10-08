const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator'); // see docs

const User = require('../../models/User');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', 
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
  ], 
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) { // if there are errors
      return res.status(400).json({ errors }); // send 400 and send back json error message
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if(user) {
        return res.status(400).json({ errors: [ { msg: 'User already exists' } ] });
      } // was getting warning about errors
      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      user = new User({
        name,
        email,
        avatar,
        password
      });
      // Encrypt password
      const salt = await bcrypt.genSalt(10); // no. relating to security higher the number more secure, but slower

      user.password = await bcrypt.hash(password, salt); // creates a hash and puts unto user password
      
      await user.save();

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