'use strict'

const db = require('../server/db')
const { User, Product, Review } = require('../server/db/models')
const mockData = require('./MOCK_DATA.json')
const mockUsers = require('./MOCK_USER_DATA.json')

/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const images = [
  'http://pngimg.com/uploads/suit/suit_PNG8121.png',
  'https://www.freeiconspng.com/uploads/black-man-in-suit-png-2.png',
  'https://a.suitsupplycdn.com/images/campaign/eveningwear/landingpage/ss17/tux2-296.png',
  'https://a.suitsupplycdn.com/images/campaign/eveningwear/landingpage/fw2016/dinner-jacket-296.png',
  'https://5.imimg.com/data5/RK/PC/MY-23863369/2-button-2pc-formal-suit-500x500.png',
  'https://www.miguelsformalwear.com/public/images/img9.png',
]

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  //generate 20 random users
  const users = []
  for (let i = 0; i < mockUsers.length; i++) {
    users.push(User.create(mockUsers[i]))
  }
  await Promise.all(users)

  //generate 100 random products and 100 random prices
  const products = []
  const sizeArr = ['36', '38', '40', '42', '44', '46']
  const colorArr = ['Black', 'Navy', 'Brown', 'Maroon', 'Pink', 'White']

  for (let i = 0; i < mockData.length; i++) {
    mockData[i].size = sizeArr[Math.floor(Math.random() * sizeArr.length)]
    mockData[i].imageUrl = images[Math.floor(Math.random() * images.length)]
    let product = Product.create(mockData[i])
    products.push(product)
  }
  await Promise.all(products)

  const reviews = []
  for (let i = 0; i < 20; i++) {
    let review = await Review.create({ text: 'hihihihihihihi', rating: '4' })
    // await associateProduct.addReview(review)
    await review.setProduct(1)
    await review.setUser(1)

    reviews.push(review)
  }

  // const resolvedReviews = await Promise.all(reviews)

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  seed()
    .catch(err => {
      console.error(err)
      process.exitCode = 1
    })
    .finally(() => {
      // `finally` is like then + catch. It runs no matter what.
      console.log('closing db connection')
      db.close()
      console.log('db connection closed')
    })
  /*
   * note: everything outside of the async function is totally synchronous
   * The console.log below will occur before any of the logs that occur inside
   * of the async function
   */
  console.log('seeding...')
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
