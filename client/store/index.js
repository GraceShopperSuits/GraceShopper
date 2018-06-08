import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import product from './product'
import cart from './cart'

const reducer = combineReducers({ user, product, cart })
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
//may need a preloaded state for a session/localstorage
//check if localStorage.state exists if so, set initial state, otherwise initialState is undefined which will trickle down to reducers
const initialState = localStorage.state ? JSON.parse(localStorage.state) : undefined
const store = createStore(reducer, initialState, middleware)

store.subscribe(() => {
  localStorage.state = JSON.stringify(store.getState())
})
export default store
export * from './user'
export * from './product'
export * from './cart'
