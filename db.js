const db = require("mongoose");

db.Promise = global.Promise;
async function connect(urlMongo) {
  await db.connect(urlMongo, {
    useNewUrlParser: true,
  });
  console.log("db conectada con exito");
}

module.exports = connect