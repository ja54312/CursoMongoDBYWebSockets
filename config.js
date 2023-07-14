const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://ija54312:NsT9IXvSJpCfuOyS@cluster0.xiczhs4.mongodb.net/Telegram',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files'
};

module.exports = config;