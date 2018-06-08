import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItemThunk, removeItemThunk, clearCartItems } from '../../store'
import { Table, Button } from 'reactstrap'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
  }

  render() {
    console.log('hiii', this.props)
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
    console.log(cartArr)
    return (
      <div>
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
                      <td>{item.price * item.saleQuantity}</td>
                      <td>
                        <Button onClick={() => this.props.addItem(item.id)}>+</Button>
                      </td>
                      <td>
                        <Button onClick={() => this.props.removeItem(item.id)}>-</Button>
                      </td>
                    </tr>
                  )
                })
              : null}
          </tbody>
        </Table>
        <Button onClick={this.props.clearCart}>Clear Cart</Button>
      </div>
    )
  }
}

export const mapStateToProps = function(state) {
  return {
    cart: state.cart,
    products: state.product,
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
