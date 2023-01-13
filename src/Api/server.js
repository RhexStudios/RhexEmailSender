const express = require('express');
const Email = require('../Domain/Models/EmailModel');
const EmailController = require('./Controllers/EmailController');
require('../Infra/database');

const app = express();
const port = '3333';

app.use(express.json());
app.use(EmailController);
/* 
app.post('/post-email', async function(req, res){
    //const { sender, subject, body_mail } = req.body;
    return await Email.create({
        sender: req.body.sender,
        subject: req.body.subject,
        body_mail: req.body.body_mail
    }).then(function(Email){
        if (Email) {
            res.send(Email)
        }else{
            res.status(400).send('erro in insert new Email')
        }
    })
})

app.get('/get-emails', async function ( req, res){
    
    try {
      
      const emails = await Email.findAll({ limit: 10 });

      res.json( emails );
      //res.sendStatus( 200 );
    } catch (err) {
      console.log( err );
      res.sendStatus( 400 );
    }}
  ) */


app.listen(port, function () {
    console.log('\n Rodando na porta 3333!! \n');
});


