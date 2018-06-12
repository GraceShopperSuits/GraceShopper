const configureStripe = require('stripe')

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === 'production'
    ? 'sk_test_BTN8iRTC8AvGzH9QXPnYjzRS'
    : 'sk_test_BTN8iRTC8AvGzH9QXPnYjzRS'

const stripe = configureStripe(STRIPE_SECRET_KEY)

module.exports = stripe
