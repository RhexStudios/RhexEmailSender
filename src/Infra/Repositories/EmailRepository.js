const email = require('../Domain/Models/EmailModel');

module.exports = {
  //#region - Post -
  async createEmail( req, res ) {
    const { sender, subject, body } = req.body;
    try {

      const mail = await email.create(
        { sender, subject, body }
      );

      res.json( mail );
      res.sendStatus( 200 );
    } catch (err) {
      console.log(err);
      res.sendStatus( 400 );
    }
  },
  //#endregion 
  //#region - Get - 
  async getEmails( req, res ) {
    try {
      
      const emails = await Email.findAll({ limit: 10 });

      res.send.json( emails );
      res.sendStatus( 200 );
    } catch (err) {
      console.log( err );
      res.sendStatus( 400 );
    }
  },
  //#endregion
};