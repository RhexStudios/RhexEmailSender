const http = require('http');
const mysql = require('mysql');
const connection = require ('../infra/database');

http.createServer(function (req, res){
        res.writeHead(200, {'Content-type': 'text/html'});
        return res.end()
}).listen(3000); 


