const {Model, DataTypes } = require('sequelize');

class Email extends Model {
  static init ( connection ) {
    super.init( {
      addressee: DataTypes.STRING || null,
      sender: DataTypes.STRING,
      subject: DataTypes.STRING,
      body_mail: DataTypes.STRING,
    }, {
      sequelize: connection
    })
  }
}

module.exports = Email;
