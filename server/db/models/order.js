const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('pending', 'sold'),
    defaultValue: 'pending',
  },
})

module.exports = Order

// +
// +//orders model: products, status, fk: userId
// +
// +//what is the difference between an order and a cart?
// +//a cart can change. an order is literally a placed cart.
// +//an order needs FIXED information.
// +
// +// we need an order.
// +// order belongToMany products and products BelongToMany Order --> we need a through table.
// +// we have products.
