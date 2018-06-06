import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class ProductLanding extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    // store.getState()
  }
  //need api routes to Link
  render() {
    const products = this.props.products || []
    console.log(this.props)
    return (
      <div className="Landing">
        {products.map(product => {
          return (
            <div className="SingleProduct" key={product.id}>
              <div className="ProductText">
                <img src={product.imageUrl} />
                <h3>{product.name}</h3>
                <p>{product.color}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.product,
  }
}

export default connect(
  mapState,
  null
)(ProductLanding)
