const express = require('express');
const controller = require('./controller')
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
   controller.addMessage(req.body.user,req.body.message)
   .then((fullMessage)=>{
       response.success(req,res,fullMessage,201)
   })
   .catch(e =>{
       response.error(req,res,'Informacion invalida',400,'Error en el contenido para loguearlo')
   })
})

router.delete('/', function(req,res){
    console.log(req.query)
    console.log(req.body)
    res.status(201).send({error:'',body:'creado correctamente'})
})

module.exports = router;
