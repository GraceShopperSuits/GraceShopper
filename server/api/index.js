const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/products', require('./products'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})


//orders model: products, status, fk: userId

//what is the difference between an order and a cart?
//a cart can change. an order is literally a placed cart. 
//an order needs FIXED information. 

// we need an order. 
// order belongToMany products and products BelongToMany Order --> we need a through table. 
// we have products. 