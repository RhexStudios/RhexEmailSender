require('../Infra/database');

const express = require('express');
const EmailController = require('./Controllers/EmailController');
const bodyParser = require('body-parser');
const app = express();
const port = '3333';

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());
app.use(EmailController);


app.listen(port, function () {
    console.log('rodando na porta 3333!!');
});


