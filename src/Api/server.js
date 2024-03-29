require('../Infra/database');
const {EmailConfig} = require('../Config/EmailConfig');

const express = require('express');

const EmailController = require('./Controllers/EmailController');
const app = express();
const port = '3333';

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))


app.use( '/', EmailController);


app.listen(port, function () {
    console.log('\n Rodando na porta 3333!! \n');
});


