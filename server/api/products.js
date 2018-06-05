const router = require('express').Router()
const { Product } = require('../db/models')
module.exports = router

//GET route for '/api/products' -- serves all products
router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => res.json(products))
    .catch(next)
})

//GET route for '/api/products/:productId' -- serves one product by ID
router.get('/:productId', (req, res, next) => {
    Product.findById(req.params.productId)
      .then(product => res.json(product))
      .catch(next)
  })
