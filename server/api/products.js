const router = require('express').Router()
const { Product, Price, Option, User } = require('../db/models')
module.exports = router

//GET route for '/api/products' -- serves all products
router.get('/', (req, res, next) => {
  let whereObj = {}
  //CG: compress these if -statements
  if (req.query && req.query.color) {
    whereObj.color = req.query.color
  }
  if (req.query && req.query.season) {
    whereObj.season = req.query.season
  }
  if (req.query && req.query.size) {
    whereObj.size = req.query.size
  }
  //CG: This is dangerous. 
  Product.findAll({ include: [{ all: true, nested: true }] })
    .then(products => res.json(products))
    .catch(next)
})

//GET route for '/api/products/:productId' -- serves one product by ID
router.get('/:productId', (req, res, next) => {
  Product.findOne({
    where: {
      id: req.params.productId,
    },
    //CG: this is where I would include reviews
  })
    .then(product => res.json(product))
    .catch(next)
})

//POST route for '/api/products' -- Allows admin to add a product

router.post('/', async (req, res, next) => {
  try {
    let product = await Product.create({
      name: req.body.name,
      color: req.body.color,
      description: req.body.description,
      season: req.body.season,
      price: +req.body.price,
      imageUrl: req.body.imageUrl,
      size: req.body.size,
    })
    if (!product) res.sendStatus(400) //CG: idt this will execute
    res.json(product)
  } catch (err) {
    next(err);
  }
})

router.put('/:id', async (req, res, next) => {
  //CG: need try catch 
  const id = +req.params.id
  let product = await Product.findById(id)
  if (!product) res.sendStatus(404)
  product = await product.update(req.body)
  res.status(201).json(product)
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
