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

    res.status(201).send('Order created')
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
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
    const updatedOrder = await order[0].update({ status: 'sold' })
    res.send(updatedOrder)
  } catch (err) {
    next(err)
  }
})
