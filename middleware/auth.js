const jwt  = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) { // middleware func. has access to req and res
  // Get token from header, when getting request from protected route need to send token in header
  const token = req.header('x-auth-token');

  // Check if no token
  if(!token) {
    return res.status(401).json({ msg: 'No token, authorisation denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user; // set req.user to the user in the token
    next(); // call the cb in any middleware function
  } catch(err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};