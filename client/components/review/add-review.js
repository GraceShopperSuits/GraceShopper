import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form } from 'reactstrap'
import { userInfo } from 'os'

class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      rating: 0,
    }
  }
  render() {
    const product = this.props.product
    const user = this.props.user || {}
    return (
      <div>
        <h1>
          {user.name} you are editing {product.name}
        </h1>
        <form>
          <label type="text" value={this.state.text} name="text" required onChange={dkfjkd}>
            <input />
          </label>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    products: state.product,
  }
}

export default connect(mapStateToProps)(ReviewForm)
