const express = require('express');
const bodyParser = require('body-parser')

const respones = require('./network/response')
const router = express.Router()

var app = express();

// app.use('/',function(req,res){
//     res.send('Holi soy un server en express')
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router);

router.get('/message', function(req,res){
    res.header({
        "custom-header": "valor personalizado"
    })
    //console.log(req.headers)
    //res.send('hola desde get')
    respones.success(req,res,'Lista de mensajes')
})

router.post('/message', function(req,res){
    console.log(req.query)
    console.log(req.body)
    res.send('mensaje añadido correctamente')
})

router.delete('/message', function(req,res){
    console.log(req.query)
    console.log(req.body)
    res.status(201).send({error:'',body:'creado correctamente'})
})

app.listen(3500)
console.log('La app esta en : http://localhost:3500')