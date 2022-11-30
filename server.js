const express = require('express');
const app = express();
const port = '8000';
const nodemailer = require('nodemailer');
const sequelize = require ('sequelize');
//banco de dados
const database = require('./Infra/Database');

//#region - conexão com o banco de dados -
(async () => {
    try { 
        const result = await database.sync();
        console.log( result );
    } catch (error) {
        console.log( error );
    }
})();
//#endregion

var transporter = nodemailer.createTransport({
    port:465,
    service: 'gmail',
    auth: {
        user: 'henriquegs002@gmail.com',
        pass: 'nezlmrvivdnpvggl'
    },
    secure: true
});

route.post('/text-mail', (req,res)=>{

    var mailOptions = {
        from: 'henriquegs002@gmail.com',
        to: 'ickbola@gmail.com',
        subject: 'teste',
        text: 'mais facil que parece',
        html: ''
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info.response)
        }
    })

});
app.listen(port);

