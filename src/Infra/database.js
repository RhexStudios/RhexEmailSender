const Sequelize = require('sequelize');
const config = require('../Config/DbConfig');
const { User } = require('../Domain/Models/EmailModel');

const connection = new Sequelize(
  variables.dbConfig.database,
  variables.dbConfig.username,
  variables.dbConfig.password,
  variables.dbConfig
);

User.init( connection );

module.exports = connection;