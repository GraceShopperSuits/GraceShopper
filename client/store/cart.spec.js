import { expect } from 'chai'
import Reducer, { addItem, removeItem, clearCartItems } from '../store/cart'
import { createStore } from 'redux'

describe('action creators', () => {
    describe('addItem', () => {
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
            expect(addItem(testProduct)).to.be.deep.equal({
                type: 'ADD_ITEM',
                item: testProduct
            })
        })
    })
    describe('removeItem', () => {
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
            expect(removeItem(testProduct)).to.be.deep.equal({
                type: 'REMOVE_ITEM',
                item: testProduct
            })
        })
    })
    describe('clearCartItems', () => {
        it('returns expected action description', () =>
            expect(clearCartItems()).to.be.deep.equal({
                type: 'CLEAR_CART_ITEMS'
            })
        )
    })
})

describe('reducer', () => {

    let testStore;
    beforeEach('Create testing store from reducer', () => {
        testStore = createStore(Reducer);
    });

    it('has correct initial state', () => {
        expect(testStore.getState()).to.be.deep.equal({})
    })

    it('add a new item from action', () => {
        testStore.dispatch({
            type: 'ADD_ITEM',
            item: {
                id: 10,
                name: "testingSuitz",
                season: "Winter",
                size: "44",
                color: "Pink",
                quantity: 4,
                price: 159,
            }
        })
        expect(testStore.getState()).to.be.deep.equal({
            10: 1
        })
    })

    it('add another existed item from action', () => {
        testStore.dispatch({
            type: 'ADD_ITEM',
            item: {
                id: 10,
                name: "testingSuitz",
                season: "Winter",
                size: "44",
                color: "Pink",
                quantity: 4,
                price: 159,
            }
        })
        testStore.dispatch({
            type: 'ADD_ITEM',
            item: {
                id: 10,
                name: "testingSuitz",
                season: "Winter",
                size: "44",
                color: "Pink",
                quantity: 4,
                price: 159,
            }
        })
        expect(testStore.getState()).to.be.deep.equal({
            10: 2
        })
    })

    it('remove item from action', () => {
        testStore.dispatch({
            type: 'ADD_ITEM',
            item: {
                id: 20,
                name: "testingSuitz(1)",
                season: "Winter",
                size: "44",
                color: "Pink",
                quantity: 4,
                price: 159,
            }
        })
        testStore.dispatch({
            type: 'ADD_ITEM',
            item: {
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
            type: 'REMOVE_ITEM',
            item: {
                id: 2,
                name: "testingSuitz(2)",
                season: "Summer",
                size: "34",
                color: "Golden",
                quantity: 10,
                price: 259,
            }
        })
        expect(testStore.getState()).to.be.deep.equal({
            20: 1
        })
    })

    it('clear cart items from action', () => {
        testStore.dispatch({
            type: 'ADD_ITEM',
            item: {
                id: 20,
                name: "testingSuitz(1)",
                season: "Winter",
                size: "44",
                color: "Pink",
                quantity: 4,
                price: 159,
            }
        })
        testStore.dispatch({
            type: 'ADD_ITEM',
            item: {
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
            type: 'CLEAR_CART_ITEMS',
        }
        )
        expect(testStore.getState()).to.be.deep.equal({})
    })
})

