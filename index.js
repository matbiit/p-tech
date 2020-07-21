const express = require("express");
const server = express();

server.get('/', function(request, response){
    response.send("Olá, professores do P-TECH :D");
});

server.listen(8080, function(){
    console.log("Servidor está rodando na porta 8080");
});