
const express = require('express');
const { createEmail, getAllEmailsBySubject, getEmails, getEmailBySubject } = require('../../Infra/Repositories/EmailRepository');
const Service = require('../Services/EmailService');
const bodyParser = require('body-parser');
const EmailController = express.Router();

const jsonParser = bodyParser.json();


//#region - Posts
EmailController.post('/post-email', jsonParser, async (req, res) => {

    const mail = {
        sender: req.body.sender,
        subject: req.body.subject,
        bodyMail: req.body.bodyMail
    }
    console.log(mail);

    const result = await createEmail(mail);
    res.json(result);
});

EmailController.post('/send-email', Service.sendEmail);
//#endregion

//#region - Gets
EmailController.get('/get-emails', getEmails);
EmailController.get('/get-emails-by-subject', getEmailBySubject);
EmailController.get('/get-all-emails-by-subject', getAllEmailsBySubject);
//#endregion

module.exports = EmailController;