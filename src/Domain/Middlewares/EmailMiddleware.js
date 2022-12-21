const express = require('express');
const { createEmail, getEmails, getEmailBySubject, getAllEmailsBySubject } = require('../../Infra/Repositories/EmailRepository');

async function createMail (req, res) {
  try {
    await createEmail(req.body);
    res.send('email cadastrado');
  } catch {
    throw new Error('Não foi possível cadastrar novo email.');
  }
};

async function getMails (req, res) {
  try {
    await getEmails();
  } catch {
    throw new Error('Não foi possível retornar os emails');
  }
};

async function getMailBySubject (req, res) {
  try{
    await getEmailBySubject(req.params);
  } catch {
    throw new Error('Não foi possível encontrar o email.');
  }
};

async function getAllMailsBySubject (req, res) {
  try{
    await getAllEmailsBySubject(req.params);
  } catch {
    throw new Error('Não foi possível retornar os emails.');
  }
};

module.exports = { createMail, getMails, getMailBySubject, getAllMailsBySubject };