import axios from 'axios'

const INITIALIZE = 'INITIALIZE_PRODUCTS'

const init = products => {
<<<<<<< HEAD
    return {
        type: INITIALIZE,
        products
    }
=======
  return {
    type: INITIALIZE,
    products,
  }
>>>>>>> master
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

<<<<<<< HEAD
export const fetchProducts = () => {
    return (dispatch) => {
        axios.get('./api/products')
            .then(res => dispatch(init(res.data)))
            .catch(err => {
                console.error('did not get data', err)
            })
    }
=======
export const fetchProduct = () => {
  return dispatch => {
    axios.get('')
  }
>>>>>>> master
}
