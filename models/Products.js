const { DataTypes } = require('sequelize')
const conn = require('../db')

const Products = conn.define('Products', {
    _id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    qtd: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.REAL,
        allowNull: false
    },
})

module.exports = Products