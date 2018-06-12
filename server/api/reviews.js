const router = require('express').Router()
const { Product, Review, User } = require('../db/models')

router.post('/', async (req, res, next) => {
  try {
    let review = await Review.create(req.body)
    review = await review.setProduct(req.body.productId)
    review = await review.setUser(req.body.userId)
    res.json(review)
  } catch (err) {
    next(err)
  }
})

module.exports = router
