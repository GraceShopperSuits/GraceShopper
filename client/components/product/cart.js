import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
  }

  //   handleChange(event) {
  //     this.setState({ [event.target.name]: event.target.value })
  //   }

  // handleSubmit(event) {

  // }

  render() {
    console.log('hiii', this.props)
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>A nice suit</td>
              <td>5</td>
              <td>$500</td>
            </tr>
          </tbody>
        </table>
        <button>Check out</button>
      </div>
    )
  }
}

// export const mapStateToProps = function(state) {
//   return {}
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     handleSubmit(event) {
//       event.preventDefault()
//       const product = {
//         ...this.state,
//       }
//       console.log(product)
//       dispatch(createProduct(product))
//     },
//   }
// }

export default connect(
  null,
  null
)(Cart)
