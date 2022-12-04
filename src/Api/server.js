const express = require('express');
const EmailController = require('./Controllers/EmailController');
require('../Infra/database');

const app = express();
const port = '3333';

app.use(express.json());
app.use(EmailController);

app.listen(port, function () {
    console.log('rodando na porta 3333!!');
});


