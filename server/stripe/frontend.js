const FRONTEND_DEV_URLS = ['http://localhost:8080/api/payment']

const FRONTEND_PROD_URLS = [
  'https://suitz.herokuapp.com/api/payment',
  'https://suitz.herokuapp.com/api/payment',
]

module.exports = process.env.NODE_ENV === 'production' ? FRONTEND_PROD_URLS : FRONTEND_DEV_URLS
