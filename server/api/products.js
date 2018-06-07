const router = require('express').Router()
const { Product, Price, Option, User } = require('../db/models')
module.exports = router

//GET route for '/api/products' -- serves all products
// /api/categories/:id/products 
router.get('/', (req, res, next) => {
  let whereObj = {};
  if (req.query && req.query.productType) {
    whereObj.productType = req.query.productType;
  } //you may want finer control over this. 
  Product.findAll({
    include: [{ all: true }],
    where: whereObj//CG: why would we need this for a 'bottom layer' like product. In reality we would limit this. 
  })
    .then(products => res.json(products))
    .catch(next)
})

//GET route for '/api/products/:productType' -- serves all products in that type/category
//what type of product we are filtering on....so it's a subfilter. This is a perfect scenario for quey params. req.query.productType 
//get rid of this route and make it a query in the route above.
router.get('/:productType', (req, res, next) => {
  Product.findByType(req.params.productType)
    .then(products => {
      res.json(products)
    })
    .catch(next)
})

//GET route for '/api/products/SKU/:productId' -- serves one product by ID
//CG: we can remove the sku part of this thing. 
router.get('/SKU/:productId', (req, res, next) => {
  Product.findOne({
    where: {
      id: req.params.productId,
    },
    include: [{ all: true }], //maybe we want this here. This could be a security vulnerability.
  })
    .then(product => res.json(product))
    .catch(next)
})


router.get('/:color', (req, res, next) => { //CG: this won't work because express can't differentiate. 
  return Product.findByColor(req.params.color) //CG: this should also be on req.query
    .then(found => res.send(found))
    .catch(next)
})
//POST route for '/api/products' -- Allows admin to add a product
router.post('/', (req, res, next) => {
  //CG: either use async await or don't. Don't forget try/catch
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
