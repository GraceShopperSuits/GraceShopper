const User = require('./user')
const Product = require('./product')
const Price = require('./price')
const Option = require('./option')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

Product.hasMany(Price)
//gives product methods, setPrices, getPrices, addPrice, addPrices, setPrices.
Price.belongsTo(Product)
//gives price methods, getProduct, setProduct, and createProduct.

Product.hasMany(Option)

module.exports = {
  User,
  Product,
  Price,
  Option,
}
