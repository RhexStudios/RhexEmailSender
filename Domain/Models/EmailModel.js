const express = require("express");
const { Sequelize, DataTypes } = require('sequelize');

class Email extends Model {
}

Email.init({

  //Destinatário - Destino
  addressee: {
    type: DataTypes.STRING,
  },
  //Remetente - Quem envia
  sender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  //Assunto
  subject: {
    type: DataTypes.STRING,
    allowNull: false
  },
  //Corpo do Email
  body: {
    type: DataTypes.STRING,
    allowNull: false
  } 
})
(async () => {
  //Sincronizando tabela criada pelo sequelize, se e somente se, a tabela se chamar "Emails"
  await sequelize.sync({ force: true, match: /Emails%/});
}) ();

module.exports = Email;
