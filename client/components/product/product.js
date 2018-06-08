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
            <h3>Price: {singleProduct.price}</h3>
            <Link to={`/products/${singleProduct.id}/edit`}>Edit</Link>
            <label htmlFor="color">Select a color: </label>
            <select name="color" onChange={this.handleChange}>
              <option value="">Pick a color</option>
              <option> {singleProduct.color} </option>
            </select>
            <label htmlFor="size">Select a size: </label>
            <select name="size">
              <option>Pick a size</option>
              <option>{singleProduct.size}</option>
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
