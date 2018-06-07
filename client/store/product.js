import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'

const getProducts = products => ({
  type: GET_PRODUCTS,
  products,
})
const addProduct = product => ({ type: ADD_PRODUCT, product })

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return action.products
    }
    case ADD_PRODUCT: {
      return [...state, action.product]
    }
    default: {
      return state
    }
  }
}

export default reducer

export const fetchProducts = () => {
  return dispatch => {
    axios
      .get('/api/products')
      .then(res => dispatch(getProducts(res.data)))
      .catch(err => console.error('could not get products', err))
  }
}

export const createProduct = product => dispatch => {
  axios
    .post('/api/products', product)
    .then(res => dispatch(addProduct(res.data)))
    .catch(error => console.error('could not create', error))
}
