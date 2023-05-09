const express = require('express');
const router = express.Router()

var app = express();

// app.use('/',function(req,res){
//     res.send('Holi soy un server en express')
// })

app.use(router);

router.get('/', function(req,res){
    res.send('hola desde get')
})

router.post('/message', function(req,res){
    res.send('mensaje añadido')
})

app.listen(3500)
console.log('La app esta en : http://localhost:3500')