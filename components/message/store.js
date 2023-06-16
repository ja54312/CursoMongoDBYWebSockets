const list = [];

function addMesasge(message) {
    list.push(message)
}

function getMessage() {
    return list;
}

module.exports= {
    add: addMesasge,
    list: getMessage
}