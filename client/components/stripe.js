import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { connect } from 'react-redux'

import STRIPE_PUBLISHABLE from '../constants/stripe'
import PAYMENT_SERVER_URL from '../constants/server'

class Stripe extends React.Component {
  constructor(props) {
    super(props)
    this.onToken = this.onToken.bind(this)
  }

  onToken(amount, description) {
    return function(token) {
      axios
        .post(PAYMENT_SERVER_URL, { description, source: token.id, currency: 'USD', amount })
        .then(res => res.data)
        .then(data => {
          alert(`Thanks for shopping with us ${this.props.email}!`)
          this.props.history.push('/')
        })
    }
  }
  render() {
    const total = this.props.amount * 100
    return (
      <StripeCheckout
        token={() => this.onToken(total, 'a nice suit')}
        stripeKey={STRIPE_PUBLISHABLE}
        name="Suitz"
        description="only the suitz"
        amount={total}
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
