const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
    beforeEach(() => {
        return db.sync({ force: true })
    })

    describe('/api/products/', () => {

        beforeEach(() => {
            return Product.create({
                name: 'Preet',
                description: 'this is a shoe',
                imageUrl: 'placeholder',
                season: 'summer',
                type: 'shoe'
            })
        })

        it('GET /api/products', () => {
            return request(app)
                .get('/api/products')
                .expect(200)
                .then(res => {
                    expect(res.body).to.be.an('array')
                    expect(res.body[0].name).to.be.equal('Preet')
                    expect(res.body[0].description).to.be.equal('this is a shoe')
                })
        })
    }) // end describe('/api/users')
}) // end describe('User routes')
