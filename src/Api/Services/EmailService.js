const { getEmailBySubject } = require('../../Infra/Repositories/EmailRepository');
const EmailConfig = require('../../Config/EmailConfig');

module.exports = {
    //Enviando Email
    async sendEmail(req, res) {
        const addressee = req.body;
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
            EmailConfig.sendMail(mailInfo);

            res.json( transporter );
        //res.sendStatus( 200 );
        } catch ( err ) {
            res.json ( err );
            //res.sendStatus( 400 );
        }
    }
}
