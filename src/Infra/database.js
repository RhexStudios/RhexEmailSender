const mysql = require('mysql');
const DbConfig = require('../Config/DbConfig');

const connection = mysql.createConnection({
  host: DbConfig.host,
  user: DbConfig.username,
  password: DbConfig.password
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Conectado!")
  connection.query("CREATE DATABASE MailSender", function (err, result) {
    if(err) throw err;
    console.log("Banco Criado")
  });
});

module.exports = connection;