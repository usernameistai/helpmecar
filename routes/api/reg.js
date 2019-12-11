const express = require('express');
const router = express.Router();

// @route   GET api/reg
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Reg route'));

module.exports = router;