const router = require('express').Router()
const { Product, Review, User } = require('../db/models')

router.post('/', async (req, res, next) => {
  let review = await Review.create(req.body)
  if (!review) res.sendStatus(400)
  review.setProduct(req.body.productId)
  review.setUser(req.body.userId)
  res.json(review)
})

module.exports = router
