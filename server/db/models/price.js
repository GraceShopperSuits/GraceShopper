const Sequelize = require('sequelize')
const db = require('../db')

const Price = db.define('price', {
    cost: {
        type: Sequelize.DECIMAL(10, 2)
    }
})

module.exports = Price