require('../node_modules/dotenv/config')

module.exports = {
    PORT: 3000,
    JWT_KEY: "DONTEVENTRYTOTHINKOFIT",
    API_KEY: '2Ru8g36qn14xZgf4NP4bMXpJ1Abmn7lb',
    ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    //VERIFY_SERVICE: process.env.VERIFY_SERVICE_SID,
    //MONGO_URL: 'mongodb+srv://admin:admin@sevadb.o7seg.mongodb.net/seva?retryWrites=true&w=majority',
    SECRET: "SUPERSECRETSECRET"
};