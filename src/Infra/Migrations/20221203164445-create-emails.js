'use strict';

const {DataTypes, Sequelize } = require('sequelize');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('emails', {
      id: {
        type: DataTypes.INTEGER,
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
        allowNull: false,
        defaultValue: "rhextestemail@mail.com"
      },
      //Assunto
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
        NotEmpty : true,
        defaultValue: "Teste"
      },
      //Corpo do Email
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        NotEmpty: true,
        defaultValue: "Teste"
      },
      //Criado na data
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      //Atualizado na data
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.dropTable('emails');
  }
};
