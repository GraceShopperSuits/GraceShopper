const router = require('express').Router()
const { Product, User, Order } = require('../db/models')
module.exports = router

// '/api/cart'
router.post('/', async (req, res, next) => {
  const userId = req.user.id
  console.log('body', req.body)
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
  cartArr.map(async eachProduct => {
    const product = await Product.findById(eachProduct)
    return product
  })

  //add products to associated order
  console.log('order', order)
  await order.addProduct(1)
  res.status(201).send('Order created')
})
