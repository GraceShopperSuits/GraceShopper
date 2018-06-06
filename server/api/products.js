const router = require('express').Router()
const { Product, Price, Option } = require('../db/models')
module.exports = router

//GET route for '/api/products' -- serves all products
router.get('/', (req, res, next) => {
  Product.findAll({
    include: [{ all: true }],
  })
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

//POST route for '/api/products' -- Allows admin to add a product
router.post('/', (req, res, next) => {
  Product.create({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    season: req.body.season,
    type: req.body.type,
  })
    .then(async product => {
      const price = await Price.create({ cost: Number(req.body.cost) })
      const option = await Option.create({
        size: req.body.size,
        color: req.body.color,
        fit: req.body.fit,
        quantity: req.body.quantity,
      })
      await product.addPrice(price)
      await product.addOption(option)
      return product
    })
    .then(updatedProduct => {
      res.json(updatedProduct)
    })
})
