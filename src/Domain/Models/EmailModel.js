const { Sequelize, Model, DataTypes } = require('sequelize');

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

module.exports = Email;
