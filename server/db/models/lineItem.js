const Sequelize = require('sequelize')
const db = require('../db')

const lineItem = db.define('lineItem', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  priceAtSale: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
})

module.exports = lineItem
