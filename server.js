const express = require('express');
const app = express();
const server = require('http').Server(app)


const bodyParser = require('body-parser');
const socket = require('./socket')
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://ija54312:NsT9IXvSJpCfuOyS@cluster0.xiczhs4.mongodb.net/Telegram');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server)

router(app);

app.use('/app', express.static('public'));

server.listen(3500,function(){
    console.log('La aplicación está escuchando en http://localhost:3500');
});