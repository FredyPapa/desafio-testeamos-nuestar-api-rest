require("dotenv").config();

const config = {
    dev: process.env.NOD_ENV !== 'production',
    port: process.env.PORT,
    cors: `${process.env.CORS}`

}

const db = {
    dbHost: process.env.DB_HOST,
    dbUsername: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbDialect: process.env.DB_DIALECT
}

module.exports = {config, db}