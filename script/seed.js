'use strict'

const db = require('../server/db')
const { User, Product, Price, Option } = require('../server/db/models')
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
  const sizeArr = ['small', 'medium', 'large']
  const colorArr = ['blue', 'red', 'orange', 'green', 'yellow', 'black']
  const fitArr = ['slim', 'relaxed', 'casual']

  for (let i = 0; i < mockData.length; i++) {
    const product = Product.create(mockData[i]).then(async currentProduct => {
      const price = await Price.create({
        cost: Math.floor(Math.random() * 100),
      })
      currentProduct.setPrices(price).then(async productWithPrice => {
        const option = await Option.create({
          size: sizeArr[Math.floor(Math.random() * sizeArr.length)],
          color: colorArr[Math.floor(Math.random() * colorArr.length)],
          fit: fitArr[Math.floor(Math.random() * fitArr.length)],
          quantity: Math.floor(Math.random() * 30),
        })
        return productWithPrice.addOption(option)
      })
      return product
    })
    products.push(product)
  }
  await Promise.all(products)

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
