const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router()

var app = express();

// app.use('/',function(req,res){
//     res.send('Holi soy un server en express')
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router);

router.get('/', function(req,res){
    res.send('hola desde get')
})

router.post('/message', function(req,res){
    console.log(req.query)
    console.log(req.body)
    res.send('mensaje añadido correctamente')
})

app.listen(3500)
console.log('La app esta en : http://localhost:3500')