const router = require('express').Router()
const { Product } = require('../db/models')
module.exports = router

//GET route for '/api/products' -- serves all products
router.get('/', (req, res, next) => {
  Product.findAll({ include: [{ all: true }] })
    .then(products => res.json(products))
    .catch(next)
})

//GET route for '/api/products/:productType' -- serves all products in that type/category
router.get('/:productType', (req, res, next) => {
  Product.findByType(req.params.productType)
    .then(products => {
      res.json(products)
    })
    .catch(next)
})

//GET route for '/api/products/SKU/:productId' -- serves one product by ID
router.get('/SKU/:productId', (req, res, next) => {
  Product.findOne({
    where: {
      id: req.params.productId,
    },
    include: [{ all: true }],
  })
    .then(product => res.json(product))
    .catch(next)
})
