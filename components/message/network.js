const express = require('express');
const controller = require('./controller')
const router = express.Router()
const response = require('../../network/response')

router.get('/', function(req,res){
    const filterMessages = req.query.user || null
   controller.getMessages(filterMessages)
   .then((messageList)=> {
    response.success(req,res,messageList,200)
   })
   .catch(e => {
    response.error(req,res,'Unexpected Error',500,e)
   })
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

router.patch('/:id',function(req,res){
    //console.log(req.params.id)
    controller.updateMessage(req.params.id,req.body.message)
        .then((data)=>{
            response.success(req,res,data,200)
        })
        .catch(e => {
            response.error(req,res,'Error interno',500,e)
        })
})

router.delete('/:id', function(req,res){
  controller.deleteMessage(req.params.id)
  .then(()=>{
    response.success(req,res,`Mensaje ${req.params.id} eliminado`,200)
  })
  .catch(e =>{
    response.error(req,res, 'Error interno',500,e)
  })
})

module.exports = router;
