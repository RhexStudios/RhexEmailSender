
const express = require('express');
const app = express();
const port = '8000';
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'henriquegs002@gmail.com',
        pass: 'nezlmrvivdnpvggl'
    }
});

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



app.listen(port)
