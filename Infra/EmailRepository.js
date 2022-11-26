const { Sequelize } = require('sequelize');

const findEmails = await Email.findAll();
console.log(Email.every(email => email instanceof Emails));
console.log('Todos os Emails:', JSON.stringify(emails, null, 2));