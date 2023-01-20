const { getEmailById } = require('../../Infra/Repositories/EmailRepository');
const { EmailConfig, mountEmail } = require('../../Config/EmailConfig');

module.exports = {
    //Enviando Email
    async sendEmail(req, res) {
        
        const mailInfo = await getEmailById();
      
        const addressee = req.body;
        //informações do email
        const mail = {
            from: mailInfo.sender,
            to: addressee,
            subject: mailInfo.subject,
            text: mailInfo.body_mail
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