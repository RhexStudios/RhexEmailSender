const express = require('express');
const { createEmail, getEmails, getEmailBySubject, getAllEmailsBySubject } = require('../../Infra/Repositories/EmailRepository');

function createMail (options) {
  return async function (req, res) {
    const mail = {
      sender: req.body.sender,
      subject: req.body.subject,
      body: req.body.body,
    }

    if (!sender)
        res.send('nenhum remetente');
    if (!subject)
        res.send('nenhum título');
    if (!bodyMail)
        res.send('nenhum corpo');

    try {
      const result = await createEmail(mail);
      res.json(result);
    } catch {
      throw new Error('Não foi possível cadastrar novo email.');
    }
  }
};

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