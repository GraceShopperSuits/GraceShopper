import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addItemThunk } from '../../store'
import Materialize from '../../../materialize/materialize.min'

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
                <img className="responsive-img" src={singleProduct.imageUrl} />
              </div>
              <div className="col s6">
                <h2>{singleProduct.name}</h2>
                <h4>{`$${singleProduct.price}`}</h4>
                <p>{`${singleProduct.season} Collection`}</p>
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
                  onClick={() => {
                    this.handleAddItem(singleProduct.id)
                    Materialize.toast({
                      html: '<span>Added to cart!</span>',
                    })
                  }}
                >
                  <i className="material-icons center">add_shopping_cart</i>
                </button>

                {user.admin ? <Link to={`/products/${singleProduct.id}/edit`}>Edit</Link> : null}

                {reviews.length ? (
                  <div className="row">
                    <h5>Reviews</h5>
                    {reviews.map(review => {
                      return (
                        <div key={review.id}>
                          <div className="col s9">
                            <p>
                              <strong>{review.user.email}</strong> - {review.text}
                            </p>
                          </div>
                          <div className="col s3">
                            <p>Rating: {review.rating}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div>There are no reviews yet! leave the first one?</div>
                )}
                <Link to={`/products/${singleProduct.id}/review`}>
                  <button type="button" className="btn">
                    Add Review!
                  </button>
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
