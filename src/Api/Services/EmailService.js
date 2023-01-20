const { getEmailById } = require('../../Infra/Repositories/EmailRepository');
const { EmailConfig, mountEmail } = require('../../Config/EmailConfig');

module.exports = {
    //Enviando Email
    async sendEmail(req, res) {
      
        const addressee = req.body;
        //informações do email
        const mail = {
            from: req.params.sender,
            to: addressee,
            subject: req.params.subject,
            text: req.params.body_mail
        }

        await mountEmail({ mail });
        try {
            //Envia!!
            EmailConfig.sendMail(mail);

            res.json( transporter );
            //res.sendStatus( 200 );
        } catch ( err ) {
            res.json ( err );
            //res.sendStatus( 400 );
        }
    }
}