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

const mountEmail = async (req, res) => {
    const { sender, addressee, subject, body_mail } = req.body;
        //Informações do email
        const mailInfo = {
            from: sender,
            to: addressee,
            subject: subject,
            text: body_mail
        };
    console.log(mailInfo);
    res.send({ mailInfo });
  }

module.exports = EmailConfig;
