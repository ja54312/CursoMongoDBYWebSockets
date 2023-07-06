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

async function getMessage(filterUser) {
    let filter = {}
    if(filterUser !== null){
        filter = {user:filterUser}
    }
    const messages = await Model.find(filter)
    return messages
}

async function updateText(id,message) {
    const foundMessage = await Model.findOne({
        _id:id
    })

    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports= {
    add: addMesasge,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage
}