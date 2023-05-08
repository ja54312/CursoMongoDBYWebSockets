const express = require('express');

var app = express();

app.use('/',function(req,res){
    res.send('Holi soy un server en express')
})

app.listen(3500)
console.log('La app esta en : http://localhost:3500')