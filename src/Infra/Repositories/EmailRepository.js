const Email = require('../../Domain/Models/EmailModel');

//#region - Post -
const createEmail = async (req, res) => {
    const { sender, subject, bodyMail } = req.body;

    if (sender == null)
        console.log("nenhum remetente");
    if (subject == null)
        console.log("nenhum título");
    if (bodyMail == null)
        console.log("nenhum corpo");

    const mail = await Email.create(
        {
            sender: sender,
            subject: subject,
            bodyMail: bodyMail,
        });

    if (mail)
        res.json(mail);

    res.status(400);
};

//#endregion 
//#region - Get - 
const getEmails = async (req, res) => {

    try {

        const emails = await Email.findAll({ limit: 10 });

        res.json(emails);
        res.sendStatus(200);
        res.end();

    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const getEmailBySubject = async (req, res) => {
    try {

        const query = req.body;
        const emails = await Email.findOne({ where: { subject: query } });

        res.send.json(emails);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const getAllEmailsBySubject = async (req, res) => {
    try {

        const query = req.params;
        const emails = await Email.findAll({ where: { subject: query } });

        res.json(emails);

    } catch (err) {

        res.json(err).sendStatus(400);
    }
};
//#endregion

module.exports = { createEmail, getEmails, getEmailBySubject, getAllEmailsBySubject };