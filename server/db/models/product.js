const Sequelize = require('sequelize')
const db = require('../db')
const Option = require('./option')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false, //CG: this won't protect against an empty string. Also, this doesn't have to be unique?
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false, //CG: may want to check valid url here. 
  },
  season: {
    type: Sequelize.STRING, //CG: definitely should be ENUM. 
  },
  type: {
    type: Sequelize.ENUM('shirt', 'suit', 'shoe'), //Should this be an enum?
  },
})

//CG: maybe make a more general one now that allows the filtering that our route will be able to hit. 
Product.findByType = type => {
  return Product.findAll({
    where: {
      type,
    },
    include: [{ all: true }],
  })
}

module.exports = Product
