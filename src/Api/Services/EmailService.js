const { nodemailer } = require('nodemailer');
const { getEmailBySubject } = require('../../Infra/Repositories/EmailRepository');

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
        const addressee = req.params;
        try {
            //Informações do email
            const mailInfo = {
                from: await getEmailBySubject.sender,
                to: addressee,
                subject: await getEmailBySubject.subject,
                text: await getEmailBySubject.body,
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
