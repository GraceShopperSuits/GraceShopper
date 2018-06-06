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

export const fetchProduct = () => {
  return dispatch => {
    axios.get('')
  }
}
