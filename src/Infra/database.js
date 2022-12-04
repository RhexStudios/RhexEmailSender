const express = require('express');
const Sequelize = require('sequelize');
const DbConfig = require('../Config/DbConfig');
const User = require('../Domain/Models/EmailModel');

const connection = new Sequelize(
  DbConfig.database,
  DbConfig.username,
  DbConfig.password,
  DbConfig
);

User.init( connection );

module.exports = connection;