
const express = require('express');
const { createMail, getMails, getAllMailsBySubject } = require('../../Domain/Middlewares/EmailMiddleware');
const Service = require('../Services/EmailService');
const EmailController = express.Router();


//#region - Posts
EmailController.post('/post-email', createMail);

EmailController.post('/send-email', Service.sendEmail);
//#endregion

//#region - Gets
EmailController.get('/get-emails', getMails);
EmailController.get('/get-all-emails-by-subject', getAllMailsBySubject);
//#endregion

module.exports = EmailController;