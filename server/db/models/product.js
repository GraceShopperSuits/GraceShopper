const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    imageUrl: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING
    },
    season: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.ENUM('shirt', 'suit', 'shoe')
    }
})


module.exports = Product;