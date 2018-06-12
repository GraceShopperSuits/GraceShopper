const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Review = require('./Review')
const lineItem = require('./lineItem')
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

Order.belongsToMany(Product, { through: lineItem })
// getProduct getProducts addProduct addProducts removeProduct removeProducts
Product.belongsToMany(Order, { through: lineItem })

Review.belongsTo(Product)
//review.getProduct setProduct createProduct
Product.hasMany(Review)
//product.addReview createReview removeReview
Review.belongsTo(User)
//review.getUser setUser createUser
User.hasMany(Review)
//user.addReview createReview removeReview

//getOrder getOrders addProduct addProducts removeProduct removeProducts
User.hasMany(Order)
// getOrder, setOrder, createOrder, addOrder, removeOrder

// Product.hasMany(Price)
// //gives product methods, setPrices, getPrices, addPrice, addPrices, setPrices.
// Price.belongsTo(Product)
// //gives price methods, getProduct, setProduct, and createProduct.

// Product.hasMany(Option)

module.exports = {
  User,
  Product,
  Order,
  Review,
}
