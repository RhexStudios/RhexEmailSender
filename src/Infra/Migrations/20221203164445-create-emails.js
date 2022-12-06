'use strict';
var DataTypes = require('sequelize/lib/data-types');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('emails', {
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
