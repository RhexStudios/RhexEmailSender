const nodemailer = require('nodemailer');

const EmailConfig = nodemailer.createTransport({
  port:465,
  service: 'gmail', //ver tutorial na docs do nodemailer
  auth: {
      user: 'henriquegs002@gmail.com',
      pass: 'twcjovtungzvbudq'
  },
  secure: true
});

module.exports = EmailConfig;
