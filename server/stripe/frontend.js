const FRONTEND_DEV_URLS = ['http://localhost:8080/api/payment']

const FRONTEND_PROD_URLS = ['https://www.yourdomain.com', 'https://yourdomain.com']

module.exports = process.env.NODE_ENV === 'production' ? FRONTEND_PROD_URLS : FRONTEND_DEV_URLS
