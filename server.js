const express = require('express');
const bodyParser = require('body-parser')

const db = require('./db')

db('mongodb+srv://ija54312:NsT9IXvSJpCfuOyS@cluster0.xiczhs4.mongodb.net/Telegram')

const router = require('./network/routes')

var app = express();

// app.use('/',function(req,res){
//     res.send('Holi soy un server en express')
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//app.use(router);

router(app);

app.use('/app',express.static('public'));

app.listen(3500)
console.log('La app esta en : http://localhost:3500')