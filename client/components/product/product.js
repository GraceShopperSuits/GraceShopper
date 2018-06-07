import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      fit: '',
      size: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
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
    const colorsInStock = Array.from(
      new Set(
        optionsInStock.map(option => {
          return option.color
        })
      )
    )
    const fitsInStock = Array.from(
      new Set(
        optionsInStock.map(option => {
          return option.fit
        })
      )
    )
    const sizesInStock = Array.from(
      new Set(
        optionsInStock.map(option => {
          return option.size
        })
      )
    )

    console.log('optionsz', colorsInStock)
    console.log('state,', this.state)
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
            <Link to={`/product/edit/${singleProduct.id}`}>Edit</Link>
            <label htmlFor="color">Select a color: </label>
            <select name="color" onChange={this.handleChange}>
              <option value="">Pick a color</option>
              {colorsInStock.map(color => {
                return <option key={color}> {color} </option>
              })}
            </select>
            <label htmlFor="fit">Select a fit: </label>
            <select name="fit" onChange={this.handleChange}>
              {fitsInStock.map(fit => {
                return <option key={fit}> {fit} </option>
              })}
            </select>
            <label htmlFor="size">Select a size: </label>
            <select name="size">
              {sizesInStock.map(size => {
                return <option key={size}> {size} </option>
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
