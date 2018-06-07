const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('price', {
    price: {
        type: Sequelize.INTEGER
    },
})



module.exports = Order