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
    defaultValue: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff',
  },
  season: {
    type: Sequelize.ENUM('Summer', 'Spring', 'Autumn', 'Winter'),
  },
  size: {
    type: Sequelize.ENUM('36', '38', '40', '42', '44', '46'),
    allowNull: false,
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
    allowNull: false,
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
