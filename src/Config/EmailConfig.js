const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  port:465,
  service: 'gmail',
  auth: {
      user: 'henriquegs002@gmail.com',
      pass: 'nezlmrvivdnpvggl'
  },
  secure: true
});

module.exports = EmailConfig;