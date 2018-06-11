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

    //map the array to convert keys to an instance of that product
    const cartItems = await Promise.all(
      cartArr.map(eachProduct => {
        const product = Product.findById(Number(eachProduct))
        return product
      })
    )

    //add products to associated order
    await order[0].addProducts(cartItems)
    res.status(201).send('Order created')
  }
  catch (error) {
    next(error)
  }
})
