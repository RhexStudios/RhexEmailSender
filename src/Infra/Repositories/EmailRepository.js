const email = require('../../Domain/Models/EmailModel');

module.exports = {
    //#region - Post -
    async createEmail(req, res) {
        const { sender, subject, body } = req.params;
        try {

            const mail = await email.create(
                { sender, subject, body }
            );

            res.json(mail).sendStatus(200);
            return;
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },
    //#endregion 
    //#region - Get - 
    async getEmails(req, res) {

        try {

            const emails = await email.findAll({ limit: 10 });
            
            res.json(emails).sendStatus(200);

        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },

    async getEmailBySubject(req, res) {
        try {

            const query = req.params;
            const emails = await email.findOne({ where: { subject: query } })

            res.send.json(emails).sendStatus(200);
        } catch (err) {

            res.json(err).sendStatus(400);
        }
    },

    async getAllEmailsBySubject(req, res) {
        try {

            const query = req.params;
            const emails = await email.findAll({ where: { subject: query } })

            res.send.json(emails).sendStatus(200);
        } catch (err) {

            res.json(err).sendStatus(400);
        }
    }
    //#endregion
};