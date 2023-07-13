const express = require('express');
const controller = require('./controller')
const router = express.Router()
const response = require('../../network/response')

// router.get('/', function(req,res){
//     const filterMessages = req.query.user || null
//    controller.getMessages(filterMessages)
//    .then((messageList)=> {
//     response.success(req,res,messageList,200)
//    })
//    .catch(e => {
//     response.error(req,res,'Unexpected Error',500,e)
//    })
// })

router.post('/', function(req,res){
   controller.addUser(req.body.name)
   .then((data)=>{
       response.success(req,res,data,201)
   })
   .catch(e =>{
       response.error(req,res,'Internal error',500,response.error)
   })
})

// router.patch('/:id',function(req,res){
//     //console.log(req.params.id)
//     controller.updateMessage(req.params.id,req.body.message)
//         .then((data)=>{
//             response.success(req,res,data,200)
//         })
//         .catch(e => {
//             response.error(req,res,'Error interno',500,e)
//         })
// })

// router.delete('/:id', function(req,res){
//   controller.deleteMessage(req.params.id)
//   .then(()=>{
//     response.success(req,res,`Mensaje ${req.params.id} eliminado`,200)
//   })
//   .catch(e =>{
//     response.error(req,res, 'Error interno',500,e)
//   })
// })

module.exports = router;
