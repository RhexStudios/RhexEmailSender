const Email = require('../../Domain/Models/EmailModel');

//#region - Post -
const createEmail = async (req, res) => {
    const { sender, subject, bodyMail } = req.body;
    const mail = await Email.create(
        {
            sender: sender,
            subject: subject,
            bodyMail: bodyMail,
        });

    if (mail)
        res.json(mail);

    res.status(400);
    console.log('Erro de requisição - ' + mail);
};

//#endregion 
//#region - Get - 
const getEmails = async (req, res) => {
        const emails = await Email.findAll({ limit: 10 });
        
        if(emails){
            res.json(emails);

        res.sendStatus(404);
        console.log('Erro de requisição - ' + emails);
    }
};

const getAllEmailsBySubject = async (req, res) => {
        const query = req.params;
        const emails = await Email.findAll({ where: { subject: query } });

        if(emails)
            res.json(emails);

        res.sendStatus(400);
        console.log('Erro de requisição - ' + emails);
};
//#endregion

module.exports = { createEmail, getEmails, getAllEmailsBySubject };