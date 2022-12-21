require('../Infra/database');

const express = require('express');
const EmailController = require('./Controllers/EmailController');
const app = express();
const port = '3333';

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use( '/', EmailController);

app.listen(port, function () {
    console.log('rodando na porta 3333!!');
});


