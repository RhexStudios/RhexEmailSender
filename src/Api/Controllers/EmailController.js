const express = require('express');
const EmailRepository = require('../../Infra/Repositories/EmailRepository');
const Service = require('../Services/EmailService');

const EmailController = express.Router();

//#region - Posts
EmailController.post('/post-email', EmailRepository.createEmail);
EmailController.post('/send-email', Service.sendEmail);
//#endregion

//#region - Gets
EmailController.get('/get-emails', EmailRepository.getEmails);
EmailController.get('/get-emails-by-subject', EmailRepository.getEmailBySubject);
EmailController.get('/get-all-emails-by-subject', EmailRepository.getAllEmailsBySubject);
//#endregion

module.exports = EmailController;
