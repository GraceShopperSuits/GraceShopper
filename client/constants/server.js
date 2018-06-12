const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://suitz.herokuapp.com/payment'
    : 'http://localhost:8080/api/payment'

export default PAYMENT_SERVER_URL
