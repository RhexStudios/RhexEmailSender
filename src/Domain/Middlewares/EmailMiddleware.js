const { createEmail } = require('../../Infra/Repositories/EmailRepository');

const NewMailValidation = async function (req, res, next) {
    const { sender, subject, body_mail } = req.body;
    
    const mail = {
            sender: sender,
            subject: subject,
            body: body_mail
        }

    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const validation = emailValidation.test(mail.sender);

    //Se não for preenchido alguns dos campos
    if ( !mail.sender || !mail.subject || !mail.body_mail ){
        console.log(mail)
        res.status(400).json({ message: 'Preencha o(s) campo(s) corretamente.' });
    }
    //Validando email (sender)
    else if ( mail.sender.length > 254 || !validation ){
      res.status(401).json({ message: 'Remetente inválido, use outro email.' })
    }
    try {
      const result = await createEmail({mail});
      console.log(result)
      res.send(result)
      next();
    } catch (err){
        console.log(err)
      throw new Error('algo de errado não está certo.');
    }
    
    
  }

module.exports = { NewMailValidation};