import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'

const getProducts = products => {
  return {
    type: GET_PRODUCTS,
    products,
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return action.products
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
