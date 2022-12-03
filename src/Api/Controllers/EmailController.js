const { express } = require('express');
const { Repo } = require('../Infra/EmailRepository');
const { Service } = require('../Services/EmailService');

const { EmailController } = express.Router();

EmailController.post('/postEmail', Repo.createEmail);
EmailController.get('/getEmails', Repo.getEmails);
EmailController.post('/sendEmail', Service.sendEmail);
