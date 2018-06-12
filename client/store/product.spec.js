import { expect } from 'chai'
import { getProducts, addProduct, editProduct } from '../store/product'
import Reducer from '../store/product'
import { createStore } from 'redux'

describe('action creators', () => {
    describe('getProducts', () => {
        it('returns expected action description', () => {
            const testProduct = {
                id: 1,
                name: "testingSuitz",
                season: "Winter",
                size: "44",
                color: "Pink",
                quantity: 4,
                price: 159,
            }
            expect(getProducts(testProduct)).to.be.deep.equal({
                type: 'GET_PRODUCTS',
                products: testProduct
            })
        })
    })
    describe('addProducts', () => {
        it('returns expected action description', () => {
            const testProduct = {
                id: 1,
                name: "testingSuitz",
                season: "Winter",
                size: "44",
                color: "Pink",
                quantity: 4,
                price: 159,
            }
            expect(addProduct(testProduct)).to.be.deep.equal({
                type: 'ADD_PRODUCT',
                product: testProduct
            })
        })
    })
    describe('editProducts', () => {
        it('returns expected action description', () => {
            const testProduct = {
                id: 1,
                name: "testingSuitz",
                season: "Winter",
                size: "44",
                color: "Pink",
                quantity: 4,
                price: 159,
            }
            expect(editProduct(testProduct)).to.be.deep.equal({
                type: 'EDIT_PRODUCT',
                product: testProduct
            })
        })
    })
})

describe('reducer', () => {

    let testStore;
    beforeEach('Create testing store from reducer', () => {
        testStore = createStore(Reducer);
    });

    it('has correct initial state', () => {
        expect(testStore.getState()).to.be.deep.equal([])
    })

    it('get products from action', () => {
        testStore.dispatch({
            type: 'GET_PRODUCTS',
            products: [{
                id: 1,
                name: "testingSuitz",
                season: "Winter",
                size: "44",
                color: "Pink",
                quantity: 4,
                price: 159,
            }]
        })
        expect(testStore.getState()).to.be.deep.equal([{
            id: 1,
            name: "testingSuitz",
            season: "Winter",
            size: "44",
            color: "Pink",
            quantity: 4,
            price: 159,
        }])
    })

    it('add product from action', () => {
        testStore.dispatch({
            type: 'GET_PRODUCTS',
            products: [{
                id: 1,
                name: "testingSuitz(1)",
                season: "Winter",
                size: "44",
                color: "Pink",
                quantity: 4,
                price: 159,
            }]
        })
        testStore.dispatch({
            type: 'ADD_PRODUCT',
            product: {
                id: 2,
                name: "testingSuitz(2)",
                season: "Summer",
                size: "34",
                color: "Golden",
                quantity: 10,
                price: 259,
            }
        })
        expect(testStore.getState()).to.be.deep.equal(
            [
                {
                    id: 1,
                    name: "testingSuitz(1)",
                    season: "Winter",
                    size: "44",
                    color: "Pink",
                    quantity: 4,
                    price: 159,
                },
                {
                    id: 2,
                    name: "testingSuitz(2)",
                    season: "Summer",
                    size: "34",
                    color: "Golden",
                    quantity: 10,
                    price: 259,
                }
            ]
        )
    })

    it('add product from action', () => {
        testStore.dispatch({
            type: 'GET_PRODUCTS',
            products: [{
                id: 1,
                name: "testingSuitz(1)",
                season: "Winter",
                size: "44",
                color: "Pink",
                quantity: 4,
                price: 159,
            }]
        })
        testStore.dispatch({
            type: 'ADD_PRODUCT',
            product: {
                id: 2,
                name: "testingSuitz(2)",
                season: "Summer",
                size: "34",
                color: "Golden",
                quantity: 10,
                price: 259,
            }
        })
        testStore.dispatch({
            type: 'EDIT_PRODUCT',
            product: {
                id: 2,
                name: "testingSuitz(3)",
                season: "Autumn",
                size: "24",
                color: "Black",
                quantity: 5,
                price: 359,
            }
        })
        expect(testStore.getState()).to.be.deep.equal(
            [
                {
                    id: 1,
                    name: "testingSuitz(1)",
                    season: "Winter",
                    size: "44",
                    color: "Pink",
                    quantity: 4,
                    price: 159,
                },
                {
                    id: 2,
                    name: "testingSuitz(3)",
                    season: "Autumn",
                    size: "24",
                    color: "Black",
                    quantity: 5,
                    price: 359,
                }
            ]
        )
    })
})
