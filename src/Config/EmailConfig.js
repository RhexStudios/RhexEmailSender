const nodemailer = require('nodemailer');

const EmailConfig = nodemailer.createTransport({
  port:465,
  service: 'gmail', //ver tutorial na docs do nodemailer
  auth: {
      user: 'add Email',
      pass: 'Add Pasword'
  },
  secure: true
});

module.exports = EmailConfig;
