import React from 'react'
import { Navbar } from './components'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductLanding from './components/product/product-home'
import { fetchProducts } from './store/product'
import { connect } from 'react-redux'

const App = () => {
  return (
    <Router >
      <div>
        <Navbar />
        <ProductLanding />
        <Routes />
      </div>
    </Router>
  )
}

// const mapDispatch = dispatch => {
//     return {
//         fetchProducts: () => {
//             dispatch(fetchProducts)
//         }
//     }
// }
//we are going to fix this dispatch!


export connect();

export default App


