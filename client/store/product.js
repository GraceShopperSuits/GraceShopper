import axios from 'axios'

const INITIALIZE = 'INITIALIZE_PRODUCTS'

const init = products => {
  return {
    type: INITIALIZE,
    products,
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case INITIALIZE: {
      return action.product
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
      .then(res => dispatch(init(res.data)))
      .catch(err => console.error('could not get products', err))
  }
}
