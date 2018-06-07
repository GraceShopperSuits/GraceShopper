const router = require('express').Router()
const { Product, Price, Option, User } = require('../db/models')
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

router.get('/:color', (req, res, next) => {
  return Product.findByColor(req.params.color)
    .then(found => res.send(found))
    .catch(next)
})
//POST route for '/api/products' -- Allows admin to add a product

router.post('/', async (req, res, next) => {
  let product = await Product.create({
    name: req.body.name,
    color: req.body.color,
    description: req.body.description,
    season: req.body.season,
    price: +req.body.price,
    imageUrl: req.body.imageUrl,
    size: req.body.size,
  })
  if (!product) res.sendStatus(400)
  res.json(product)
})

// router.post('/', (req, res, next) => {
//   Product.create({
//     name: req.body.name,
//     description: req.body.description,
//     imageUrl: req.body.imageUrl,
//     season: req.body.season,
//     type: req.body.type,
//   })
//     .then(async product => {
//       const price = await Price.create({ cost: Number(req.body.cost) })
//       const option = await Option.create({
//         size: req.body.size,
//         color: req.body.color,
//         fit: req.body.fit,
//         quantity: req.body.quantity,
//       })
//       await product.addPrice(price)
//       await product.addOption(option)
//       return product
//     })
//     .then(updatedProduct => {
//       res.json(updatedProduct)
//     })
// })
