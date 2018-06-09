import axios from 'axios'

const SEARCH_PRODUCT = 'SEARCH_PRODUCT'

const searchProduct = product => ({
    type: SEARCH_PRODUCT,
    product,
})


const reducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_PRODUCT: {
            return Object.assign({}, state, { foundItem: action.product })
        }
        default: {
            return state
        }
    }
}

export default reducer

export const searchProductThunk = () => {
    return dispatch => {
        axios
            .get('/api/products')
            .then(res => dispatch(searchProduct(res.data)))
            .catch(err => console.error('could not get products', err))
    }
}