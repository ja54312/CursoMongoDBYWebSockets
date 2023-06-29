const db = require('mongoose');
const Model = require('./model')

const urlMongo = 'mongodb+srv://ija54312:NsT9IXvSJpCfuOyS@cluster0.xiczhs4.mongodb.net/Telegram'
db.Promise = global.Promise
db.connect(urlMongo,{
    useNewUrlParser:true
})
console.log('db conectada con exito')

function addMesasge(message) {
    //list.push(message)
    const myMessage = new Model(message);
    myMessage.save()
}

async function getMessage() {
    //return list;
    const messages = await Model.find()
    return messages
}

module.exports= {
    add: addMesasge,
    list: getMessage
}