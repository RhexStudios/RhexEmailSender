const express = require('express');
const app = express();
const port = '8000';
const nodemailer = require('nodemailer');
const sequelize = require ('sequelize');

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
//Sincronizando tabela criada pelo sequelize, se e somente se, a tabela se chamar "Emails"
await sequelize.sync({ force: true, match: /Emails%/});
app.listen(port);

