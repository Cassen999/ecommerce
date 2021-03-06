// No changes should be required in this file

const cookieSession = require('cookie-session');
const warnings = require('../constants/warnings');

const serverSessionSecret = () => {
  if (!process.env.SERVER_SESSION_SECRET ||
      process.env.SERVER_SESSION_SECRET.length < 8 ||
      process.env.SERVER_SESSION_SECRET === warnings.exampleBadSecret) {
    console.log(warnings.badSecret);
  }

  return process.env.SERVER_SESSION_SECRET;
};

module.exports = cookieSession({
  secret: serverSessionSecret() || 'secret', // please set this in your .env file
  key: 'user', 
  resave: 'false',
  saveUninitialized: false,
  maxAge: 60 * 60 * 1000, // Set to 1 hour
  secure: false
});
