const express = require("express")
var cors = require('cors')
var bodyParser = require('body-parser')
const server = express()

var corsOptions = {
    origin: '*'
}

server.use(cors(corsOptions))
server.use(bodyParser.json())

server.post('/login', function (req, res) {
    console.log('Intento de login: ' + JSON.stringify(req.body))

    let data = req.body

    if (data.user == '' || data.pass == '') {
        response = {
            err: 1,
            text: "Los campos estan vacios"
        }
    } else {
        response = {
            result : "ok"
        }
    }

    res.send(response);
});

server.get('/hola', function (req, res) {
    res.send('[GET]Saludos desde express');
});

server.listen(5001, () => {
    console.log("El servidor está inicializado en el puerto 5001");
});