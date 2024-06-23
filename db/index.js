require('dotenv').config()
const { Sequelize } = require('sequelize')
 const DATABASE = process.env.DATABASE
 const USER = process.env.USER
 const PASSWORD = process.env.PASSWORD
 const HOST = process.env.HOST

const conn = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
})

module.exports = conn