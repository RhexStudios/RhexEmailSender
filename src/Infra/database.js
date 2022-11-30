const Sequelize = require('sequelize');
const config = require('../Config/DatabaseConfig');

const connection = new Sequelize(config);

module.exports = connection;