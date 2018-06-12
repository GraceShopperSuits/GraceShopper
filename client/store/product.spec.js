import { expect } from 'chai'
import { getProducts, addProduct, editProduct } from '../store/product'
import reducer from '../store/product'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import store from '../store'

describe('action creators', () => {
    describe('getProducts', () => {
        it('returns expected action description', () => {
            const testProduct = {
                id: 1,
                name: "noah",
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
                name: "noah",
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
                name: "noah",
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

describe('store/reducer', () => {

    let testingStore;
    beforeEach('Create testing store from reducer', () => {
        testingStore = createStore(reducer);
    });

    beforeEach('initialize the store to be loading products', () => {
        testingStore.replaceReducer(() => ({
            ...testingStore.getState(),
        }))
    })
})

