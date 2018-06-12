import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const EDIT_PRODUCT = 'EDIT_PRODUCT'

const getProducts = products => ({
  type: GET_PRODUCTS,
  products,
})
const addProduct = product => ({ type: ADD_PRODUCT, product })
const editProduct = product => ({ type: EDIT_PRODUCT, product })

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return action.products
    }
    case ADD_PRODUCT: {
      return [...state, action.product]
    }
    case EDIT_PRODUCT: {
      return state.map(elem => {
        if (elem.id === action.product.id) {
          return action.product
        }
        return elem
      }) //if productId macthes replace with new product ,else return product(old one)
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

export const updateProduct = (product, id) => dispatch => {
  axios
    .put(`/api/products/${id}`, product)
    .then(res => dispatch(editProduct(res.data)))
    .catch(error => console.error('could not update', error))
}
