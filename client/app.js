import React from 'react'

import { Navbar } from './components'
import Routes from './routes'

import { BrowserRouter as Router } from 'react-router-dom'
import ProductLanding from './components/product/product-home'

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

export default App
