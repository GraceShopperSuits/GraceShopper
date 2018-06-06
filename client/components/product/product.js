import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const id = Number(this.props.match.params.productId)
    const { products } = this.props
    const singleProduct =
      products.filter(product => {
        return product.id === id
      })[0] || {}
    const prices = singleProduct.prices || []
    const options = singleProduct.options || []
    const optionsInStock = options.filter(product => {
      return product.quantity > 0
    })
    console.log(prices)
    return (
      <div className="ProductComponent">
        {singleProduct.id ? (
          <div>
            <img src={singleProduct.imageUrl} />
            <h1>{singleProduct.name}</h1>
            <h3>{singleProduct.type}</h3>
            <h3>{singleProduct.description}</h3>
            <h3>{singleProduct.season} collection</h3>
            <h3>Price: {prices[prices.length - 1].cost}</h3>
            <label htmlFor="sizes">Select a color: </label>
            <select name="colors">
              {optionsInStock.map(option => {
                return <option key={option.id}> {option.color} </option>
              })}
            </select>
            <label htmlFor="fits">Select a fit: </label>
            <select name="fits">
              {optionsInStock.map(option => {
                return <option key={option.id}> {option.fit} </option>
              })}
            </select>
            <label htmlFor="sizes">Select a size: </label>
            <select name="sizes">
              {optionsInStock.map(option => {
                return <option key={option.id}> {option.size} </option>
              })}
            </select>
          </div>
        ) : null}
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
)(Product)
