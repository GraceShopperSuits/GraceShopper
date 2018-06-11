import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItemThunk, removeItemThunk, clearCartItems, createOrder } from '../../store'
import { Table, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
    this.handleCheckout = this.handleCheckout.bind(this)
  }
  handleCheckout() {
    if (this.props.user.id) {
      this.props.createOrder(this.props.cart)
    } else {
      return 'nothing'
    }
    //display modal telling user to sign in.
  }
  render() {
    console.log('were in checkout', this.props)
    const cart = this.props.cart
    const products = this.props.products
    const cartArr = []
    for (let key in cart) {
      if (cart.hasOwnProperty(key)) {
        const currProduct = products.filter(product => {
          return product.id === Number(key)
        })
        currProduct[0].saleQuantity = Number(cart[key])
        cartArr.push(currProduct[0])
      }
    }
    let total = 0
    cartArr.forEach(item => {
      total += item.price * item.saleQuantity
    })

    return (
      <div className="row">
        <div className="col s10">
          <Table bordered>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartArr.length
                ? cartArr.map(item => {
                    return (
                      <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.saleQuantity}</td>
                        <td>{`$${item.price * item.saleQuantity}`}</td>
                      </tr>
                    )
                  })
                : null}
              <tr>
                <td />
                <td />
                <td>{`Total:  $${total}`}</td>
              </tr>
            </tbody>
          </Table>
          <button type="button" className="btn">
            Confirm order
          </button>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = function(state) {
  return {
    cart: state.cart,
    products: state.product,
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: itemId => {
      dispatch(addItemThunk(itemId))
    },
    removeItem: itemId => {
      dispatch(removeItemThunk(itemId))
    },
    clearCart: () => {
      dispatch(clearCartItems())
    },
    createOrder: orderInformation => {
      dispatch(createOrder(orderInformation))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout)
