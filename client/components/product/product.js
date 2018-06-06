import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    // console.log('hello!')
    const id = this.props.match.params.id
    return (
      <div className="ProductComponent">
        <img src="" />
        <h1>Hello</h1>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.product,
  }
}

export default connect(
  mapState,
  null
)(Product)
