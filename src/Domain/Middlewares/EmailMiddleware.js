const express = require('express');
const { createEmail, getEmails, getEmailBySubject, getAllEmailsBySubject } = require('../../Infra/Repositories/EmailRepository');

const NewMailValidation = async function (req, res, next) {
    const mail = {
      sender: req.body.sender,
      subject: req.body.subject,
      body: req.body.bodyMail,
    }
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const validation = emailValidation.test(sender);

    //Se não for preenchido alguns dos campos
    if ( !sender || !subject || !bodyMail )
        res.status(400).json({ message: 'Preencha o(s) campo(s) corretamente.' });
    //Validando email (sender)
    if ( sender.length > 254 || !validation )
      res.status(401).json({ message: 'Remetente inválido, use outro email.' })

    try {
      res.send(mail)
      next();
    } catch {
      throw new Error('algo de errado não está certo.');
    }
  }

function getMails () {
  return async function(req, res) {
    try {
      const result = await getEmails();
      res.json(result);
    } catch {
      throw new Error('Não foi possível retornar os emails');
    }
  };
  }

function getAllMailsBySubject (options) {
  return async function(req, res) {
    const query = req.params;

    if(!query)
      res.send('não foi possível pegar dados de pesquisa');

    try{
      const result = await getAllEmailsBySubject(query);
      res.json(result);
    } catch {
      throw new Error('Não foi possível retornar os emails.');
    }
  }
};

module.exports = { createMail, getMails, getAllMailsBySubject };