const express = require('express');
const app = express();
const port = '3333';
const nodemailer = require('nodemailer');
const sequelize = require ('sequelize');
//banco de dados
const database = require('./Config/DbConfig');

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

app.listen(port, function () {
    console.log('rodando na porta 3333!!');
});


