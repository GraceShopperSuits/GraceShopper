import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { connect } from 'react-redux'

class Stripe extends React.Component {
  constructor(props) {
    super(props)
    this.onToken = this.onToken.bind(this)
  }

  //JSON.stringify()
  onToken(token) {
    axios
      .post('/save-stripe-token', token)
      .then(response => response.data)
      .then(data => {
        alert(`Thanks for shopping with us ${this.props.email}!`)
        console.log('props', this.props)
        this.props.history.push('/')
      })
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_HWld5WnOMiogEDaG7uaDooeZ"
        name="Suitz"
        description="only the suitz"
        amount={this.props.amount * 100}
        currency="USD"
        email={this.props.email}
      />
    )
  }
}

export default connect(
  null,
  null
)(Stripe)
