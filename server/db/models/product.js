const Sequelize = require('sequelize')
const db = require('../db')
const Option = require('./option')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  season: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.ENUM('shirt', 'suit', 'shoe'),
  },
})

Product.findByType = type => {
  return Product.findAll({
    where: {
      type,
    },
    include: [{ all: true }],
  })
}

module.exports = Product
