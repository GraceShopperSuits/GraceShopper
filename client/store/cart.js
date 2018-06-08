import axios from 'axios'

const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const CLEAR_CART_ITEMS = 'CLEAR_CART_ITEMS'

export const addItem = item => {
  return {
    type: ADD_ITEM,
    item,
  }
}
export const removeItem = item => {
  return {
    type: REMOVE_ITEM,
    item,
  }
}
export const clearCartItems = () => {
  return {
    type: CLEAR_CART_ITEMS,
  }
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      if (!state.hasOwnProperty(action.item.id)) {
        return { ...state, [action.item.id]: 1 }
      } else {
        const previousQuantity = state[action.item.id]
        return { ...state, [action.item.id]: previousQuantity + 1 }
      }
    }
    case REMOVE_ITEM: {
      if (state.hasOwnProperty(action.item.id)) {
        const newState = { ...state }
        newState[action.item.id]--
        if (newState[action.item.id] === 0) {
          delete newState[action.item.id]
        }
        return newState
      }
      break
    }
    case CLEAR_CART_ITEMS: {
      return {}
    }
    default: {
      return state
    }
  }
}

export default reducer

// export const fetchProducts = () => {
//   return dispatch => {
//     axios
//       .get('/api/products')
//       .then(res => dispatch(getProducts(res.data)))
//       .catch(err => console.error('could not get products', err))
//   }
// }

// export const createProduct = product => dispatch => {
//   axios
//     .post('/api/products', product)
//     .then(res => dispatch(addProduct(res.data)))
//     .catch(error => console.error('could not create', error))
// }
