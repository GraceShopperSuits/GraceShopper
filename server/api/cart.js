const router = require('express').Router()
const { Product, User, Order } = require('../db/models')
module.exports = router

// '/api/cart'
router.post('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    //get user id from req.user object

    //find an open order that is pending or create a new one
    const order = await Order.findOrCreate({
      where: {
        userId,
        status: 'pending',
      },
    })
    //get keys(product ids) from cart object
    const cartArr = Object.keys(req.body)
    cartArr.forEach(async product => {
      const { price } = await Product.findById(Number(product))
      await order[0].addProduct(Number(product), {
        through: { quantity: req.body[product], priceAtSale: price },
      })
    })
    // let products = []
    // for (let key in req.body) {
    //   if (req.body.hasOwnProperty(key)) {
    //     let quantity = req.body[key]
    //     let product = await Product.findById(Number(key))
    //     for (let i = 0; i < quantity; i++) {
    //       products.push(product)
    //     }
    //   }
    // }

    // // map the array to convert keys to an instance of that product
    // const cartItems = await Promise.all(
    //   cartArr.map(eachProduct => {
    //     const product = Product.findById(Number(eachProduct))
    //     return product
    //   })
    // )

    //add products to associated order
    // await order[0].addProduct(cartItems[0], { through: { quantity: 1, priceAtSale: 111 } })
    res.status(201).send('Order created')
  } catch (error) {
    next(error)
  }
})
