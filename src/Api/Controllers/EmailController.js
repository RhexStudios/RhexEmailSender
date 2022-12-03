const { express } = require('express');
const { Repo } = require('../Infra/EmailRepository');
const { Service } = require('../Services/EmailService');

const { EmailController } = express.Router();

//#region - Posts
EmailController.post('/post-email', Repo.createEmail);
EmailController.post('/send-email', Service.sendEmail);
//#endregion

//#region - Gets
EmailController.get('/get-emails', Repo.getEmails);
EmailController.get('/get-emails-by-subject', Repo.getEmailBySubject);
EmailController.get('/get-all-emails-by-subject', Repo.getAllEmailsBySubject);
//#endregion
