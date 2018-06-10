const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  rating: {
    type: Sequelize.ENUM('1', '2', '3', '4', '5'),
  },
})

module.exports = Review
