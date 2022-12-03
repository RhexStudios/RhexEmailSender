const { Model, DataTypes } = require('sequelize');

class Email extends Model {
  static init ( connection ) {
    super.init( {
      addressee: DataTypes.STRING,
      sender: DataTypes.STRING,
      subject: DataTypes.STRING,
      body: DataTypes.STRING,
    }, {
      sequelize: connection
    })
  }
}

(async () => {
  //Sincronizando tabela criada pelo sequelize, se e somente se, a tabela se chamar "Emails"
  await sequelize.sync({ force: true, match: /Emails%/});
}) ();

module.exports = Email;
