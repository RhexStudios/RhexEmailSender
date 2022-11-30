const { Sequelize } = require('sequelize');
const email = require('../Domain/Models/EmailModel');
const { db } = require('./Database');
const { express, Request, Response } = require('express');

//#region - Post -
const postEmail = async (req, res) => {
  try {
    const mail = req.body;
    await email.create(
      mail
    )
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}
//#endregion

//#region - Gets - 
const findEmails = async ( req, res) => {
  try {
    const { query } = req.params;
    const emails = await Email.findAll({ limit: 10 });
    res.send.json( emails );
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

//#endregion