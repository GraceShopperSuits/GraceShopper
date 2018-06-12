const router = require('express').Router()
const stripe = require('../stripe/stripe')

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr })
  } else {
    res.status(200).send({ success: stripeRes })
  }
}

router.get('/', (req, res) => {
  res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
})

router.post('/', (req, res) => {
  console.log(req.body, '$^$^$strip charge')
  stripe.charges.create(req.body, postStripeCharge(res))
})

module.exports = router

// const paymentApi = app => {
//   app.get('/', (req, res) => {
//     res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
//   })

// app.post('/', (req, res) => {
//   stripe.charges.create(req.body, postStripeCharge(res))
// })

//   return app
// }
