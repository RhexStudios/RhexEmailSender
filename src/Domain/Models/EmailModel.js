const express = require("express");
const { Sequelize, DataTypes } = require('sequelize');

class Email extends Model {}

Email.init({
  //Id do Email
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  //Destinatário - Destino
  addressee: {
    type: DataTypes.STRING,
    isEmail: true,
    allowNull: true,
  },
  //Remetente - Quem envia
  sender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  //Assunto
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
    NotEmpty : true,
  },
  //Corpo do Email
  body: {
    type: DataTypes.STRING,
    allowNull: false,
    NotEmpty: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

(async () => {
  //Sincronizando tabela criada pelo sequelize, se e somente se, a tabela se chamar "Emails"
  await sequelize.sync({ force: true, match: /Emails%/});
}) ();

module.exports = Email;
