const Sequelize = require('sequelize')
const db = require('../db')

const Option = db.define('option', {
  size: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING,
  },
  fit: {
    type: Sequelize.STRING,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
})

module.exports = Option
