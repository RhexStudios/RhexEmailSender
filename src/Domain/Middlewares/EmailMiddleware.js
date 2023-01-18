const express = require('express');
const {  getEmails, getEmailBySubject, getAllEmailsBySubject, createEmail } = require('../../Infra/Repositories/EmailRepository');

const NewMailValidation = async function (req, res, next) {
    const mail = {
      sender: req.body.sender,
      subject: req.body.subject,
      body: req.body.bodyMail,
    }
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const validation = emailValidation.test(mail.sender);

    //Se não for preenchido alguns dos campos
    if ( !mail.sender || !mail.subject || !mail.bodyMail )
        res.status(400).json({ message: 'Preencha o(s) campo(s) corretamente.' });
    //Validando email (sender)
    if ( mail.sender.length > 254 || !validation )
      res.status(401).json({ message: 'Remetente inválido, use outro email.' })

    try {
      const result = await createEmail(mail);
      res.send(result)
      next();
    } catch {
      throw new Error('algo de errado não está certo.');
    }
  }

module.exports = { NewMailValidation};