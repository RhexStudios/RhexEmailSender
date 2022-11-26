const { Sequelize } = require('sequelize');

const sequelize = new Sequelize ( 'database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite'
});

try {
  await sequelize.authenticate();
  console.log( 'Conectou com o banco!! Yay \o/' )
} catch (error) {
  console.log( 'Não conseguimos nos conectar com o banco. :(', error )
}