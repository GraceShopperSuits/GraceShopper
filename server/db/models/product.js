const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING,
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

Product.findByColor = color => {
  return Product.findAll({
    where: {
      color,
    },
    include: [{ all: true }],
  })
}

Product.findBySeason = season => {
  return Product.findAll({
    where: {
      season,
    },
    include: [{ all: true }],
  })
}

module.exports = Product
