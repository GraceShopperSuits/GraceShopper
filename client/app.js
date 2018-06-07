import React, { Component } from 'react'
import { Navbar } from './components'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductLanding from './components/product/product-home'
import { fetchProducts } from './store/product'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    //when component mounts it will fetch all the data to the store
    const fetchInitialData = this.props.fetchInitialData
    fetchInitialData()
  }
  render() {
    return (
      <div>
        <Navbar />
        {/* <ProductLanding /> */}
        <Routes />
      </div>
    )
  }
}
//fetch initial data will run all our initial axios, including users later
const mapDispatch = dispatch => {
  return {
    fetchInitialData: () => {
      dispatch(fetchProducts())
    },
  }
}

const mapState = null

export default connect(
  mapState,
  mapDispatch
)(App)
