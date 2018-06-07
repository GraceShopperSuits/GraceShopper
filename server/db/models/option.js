const Sequelize = require('sequelize')
const db = require('../db')

const Option = db.define('option', {
  size: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING,
  }, //CG: product specific.
  fit: {
    type: Sequelize.STRING,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
})
//CG: THIS IS VERY GOOD!! but not right now. Sequelize.ARRAY or Sequelize.JSONB. 
module.exports = Option
