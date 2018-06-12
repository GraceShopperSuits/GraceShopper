import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { connect } from 'react-redux'
import { clearCartItems } from '../store'
import STRIPE_PUBLISHABLE from '../constants/stripe'
import PAYMENT_SERVER_URL from '../constants/server'

class Stripe extends React.Component {
  constructor(props) {
    super(props)
    this.onToken = this.onToken.bind(this)
    this.successPayment = this.successPayment.bind(this)
    this.errorPayment = this.errorPayment.bind(this)
  }

  successPayment = data => {
    alert('Payment Successful')
    this.props.history.push('/')
    this.props.clearCart()
  }

  errorPayment = data => {
    alert('Payment Error')
  }
  onToken = (amount, description) => token =>
    axios
      .post(PAYMENT_SERVER_URL, {
        description,
        source: token.id,
        currency: 'USD',
        amount,
      })
      .then(this.successPayment)
      .catch(this.errorPayment)

  render() {
    const total = this.props.amount * 100
    return (
      <StripeCheckout
        token={this.onToken(total, 'a nice suit')}
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

const mapDispatch = dispatch => {
  return {
    clearCart: () => {
      dispatch(clearCartItems())
    },
  }
}

export default connect(
  null,
  mapDispatch
)(Stripe)
