const { nodemailer } = require('nodemailer');
const { getEmails } = require('../../Infra/Repositories/EmailRepository');

//#region - Configurando envio de email
const transporter = nodemailer.createTransport({
  port:465,
  service: 'gmail',
  auth: {
      user: 'henriquegs002@gmail.com',
      pass: 'nezlmrvivdnpvggl'
  },
  secure: true
});
//#endregion

module.exports = {
    //Enviando Email
    async sendEmail(req, res) {
        try {
            //Informações do email
            const mailInfo = {
                from: getEmails.sender,
                to: req.params,
                subject: getEmails.subject,
                text: getEmails.body,
                html: ''
            };
            //Envia!!
            transporter.sendMail (mailInfo);

            res.json ( transporter );
            res.sendStatus( 200 );
        } catch ( err ) {
            res.json ( err );
            res.sendStatus( 400 );
        }
    }
}
