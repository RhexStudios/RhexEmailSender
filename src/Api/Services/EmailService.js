const { getEmailById, getEmailToSend } = require('../../Infra/Repositories/EmailRepository');
const { EmailConfig, mountEmail } = require('../../Config/EmailConfig');

module.exports = {
    //Enviando Email
    async sendEmail(req, res) {

        const query = req.params.id;
        console.log(query);
        const mailData = getEmailToSend(req, res).then(data => {

            console.log(data);

            const addressee = req.body;
            //informações do email
            const mail = {
                from: data.sender,
                to: addressee.addressee,
                subject: data.subject,
                text: data.body_mail
            }
            
            console.log(mail)
    
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
            
        );
    }
}