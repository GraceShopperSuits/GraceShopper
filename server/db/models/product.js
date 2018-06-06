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

<<<<<<< HEAD
Product.findByColor = color => {
  return Product.findAll({
    include: [{
      model: Option,
      where: { color }
    }]
  })
}

//find all items that are blue (like blue shirt? like blue shoe?)

Product.findBySeason = season => {
  return Product.findAll({
    where: {
      season,
    },
    include: [{ all: true }],
  })
}

=======
>>>>>>> 98cbcdd65a368a8b30b2f57c91993f31ff3d032e
module.exports = Product
