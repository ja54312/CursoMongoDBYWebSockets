const express = require('express');
const router = express.Router()
const response = require('../../network/response')

router.get('/', function(req,res){
    res.header({
        "custom-header": "valor personalizado"
    })
    //console.log(req.headers)
    //res.send('hola desde get')
    response.success(req,res,'Lista de mensajes')
})

router.post('/', function(req,res){
    console.log(req.query)
    if( req.query.error === 'ok'){
        response.error(req,res,'Error inesperado',500,'Es solo una simulacion de los errores')
    } else{
        response.success(req,res,'Creado correctamente,201')
    }
    console.log(req.body)
    res.send('mensaje añadido correctamente')
})

router.delete('/', function(req,res){
    console.log(req.query)
    console.log(req.body)
    res.status(201).send({error:'',body:'creado correctamente'})
})

module.exports = router;
