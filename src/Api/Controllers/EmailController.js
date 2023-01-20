const express = require('express');
const { getEmails, getAllEmailsBySubject, createEmail, getEmailById } = require('../../Infra/Repositories/EmailRepository');
const Service = require('../Services/EmailService');
const EmailController = express.Router();


//#region - Posts
EmailController.post('/post-email', createEmail);

EmailController.post('/send-email/:id', Service.sendEmail);
//#endregion

//#region - Gets
EmailController.get('/get-emails', getEmails);
EmailController.get('/get-email-by-id/:id', getEmailById);
EmailController.get('/get-all-emails-by-subject', getAllEmailsBySubject);
//#endregion

module.exports = EmailController;