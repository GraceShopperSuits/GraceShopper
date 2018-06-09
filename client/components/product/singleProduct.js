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
            <div className="row">
              <div className="col s6">
                <img src="http://pngimg.com/uploads/suit/suit_PNG8121.png" />
              </div>
              <div className="col s6">
                <h1>{singleProduct.name}</h1>
                <h3>{`$${singleProduct.price}`}</h3>
                <h3>{`${singleProduct.season} Collection`}</h3>
                <p>{singleProduct.description}</p>
                <div className="input-field">
                  <select>
                    <option value="" disabled>
                      Choose your color
                    </option>
                    <option value="1">color 1</option>
                  </select>
                </div>
                <div className="input-field">
                  <select>
                    <option value="" disabled>
                      Choose your size
                    </option>
                    <option value="1">size 1</option>
                  </select>
                </div>
                <button
                  className="waves-effect waves-light btn"
                  onClick={() => this.handleAddItem(singleProduct.id)}
                >
                  <i className="material-icons center">add_shopping_cart</i>
                </button>

                {user.admin ? <Link to={`/products/${singleProduct.id}/edit`}>Edit</Link> : null}

                {reviews.length ? (
                  reviews.map(review => {
                    return (
                      <div key={review.id}>
                        <h3>Review By {review.user.email}</h3>
                        <p>{review.text}</p>
                        <h3>RATING:{review.rating}</h3>
                      </div>
                    )
                  })
                ) : (
                  <div>There are no reviews yet! leave the first one?</div>
                )}
                <Link to={`/products/${singleProduct.id}/review`}>
                  <Button>Add Review! :(</Button>
                </Link>
              </div>
            </div>
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
