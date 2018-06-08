import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addItemThunk } from '../../store'
import { Button } from 'reactstrap'

class SingleProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      fit: '',
      size: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleAddItem(itemId) {
    this.props.addItem(itemId)
  }
  render() {
    const id = Number(this.props.match.params.productId)
    const { products, user } = this.props
    const singleProduct =
      products.filter(product => {
        return product.id === id
      })[0] || {}
    const reviews = singleProduct.reviews || []
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

            {user.admin ? <Link to={`/products/${singleProduct.id}/edit`}>Edit</Link> : null}
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
            <Button onClick={() => this.handleAddItem(singleProduct.id)}>Add to Cart</Button>
            {reviews.length ? (
              reviews.map(review => {
                return <div key={review.id}>{review.text}</div>
              })
            ) : (
              <div>There are no reviews yet! leave the first one?</div>
            )}
            <Link to={`/products/${singleProduct.id}/review`}>
              <Button>Add Review! not working yet :(</Button>
            </Link>
          </div>
        ) : null}
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.product,
    cart: state.cart,
    user: state.user,
  }
}

const mapDispatch = dispatch => {
  return {
    addItem: itemId => {
      dispatch(addItemThunk(itemId))
    },
  }
}

export default connect(
  mapState,
  mapDispatch
)(SingleProduct)
