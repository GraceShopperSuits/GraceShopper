const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://pngimg.com/uploads/suit/suit_PNG8121.png',
    validate: {
      isUrl: true,
    },
  },
  season: {
    type: Sequelize.ENUM('Summer', 'Spring', 'Autumn', 'Winter'),
  },
  size: {
    type: Sequelize.ENUM('36', '38', '40', '42', '44', '46'),
  },
  color: {
    type: Sequelize.ENUM('Black', 'Navy', 'Brown', 'Maroon', 'Pink', 'White'),
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
})

Product.findByType = type => {
  return Product.findAll({
    where: {
      type,
    },
  })
}

Product.findByQuery = query => {
  return Product.findAll({
    where: query,
  })
}

module.exports = Product
