const Email = require('../../Domain/Models/EmailModel');

//#region - Post -
const createEmail = async (req, res) => {
    const { sender, subject, body_mail } = req.body;
    const mail = await Email.create(
        {
            sender,
            subject,
            body_mail
        });
    
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

    if (mail)
        return res.status(200).json(mail);

    console.log('Erro de requisição - ' + mail);
    return res.status(400).json({ message: "Não foi possível cadastrar novo email." });
};

//#endregion 
//#region - Get - 
const getEmails = async (req, res) => {
        const emails = await Email.findAll({ limit: 10 });
        
        if(!emails)
        {
            res.sendStatus(404);
            console.log('Erro de requisição - ' + emails);
        }
        res.json(emails);
};

const getAllEmailsBySubject = async (req, res) => {
        const query = req.body;
        const emails = await Email.findAll({where: subject = query});

        if(!emails)
        {
            res.sendStatus(400);
            console.log('Erro de requisição - ' + emails);
        }
        res.json(emails);
    };

const getEmailById = async (req, res) => {
    const query = req.params;
    const email = await Email.findOne({ where: id = query });

    if(!email)
    {
        res.sendStatus(400);
        console.log( 'Erro de requisição - ' + email);
    }
    res.json(email);
}

const getEmailToSend = async(req, res) => {
    const query = req.params;
    const email = await Email.findOne({ where: id = query });

    if(!email)
    {
        res.sendStatus(400);
        console.log('Erro de requisição - ' + email); 
    }
    const result = email.dataValues;
    return result;
}
//#endregion

module.exports = { createEmail, getEmails, getAllEmailsBySubject, getEmailById, getEmailToSend };