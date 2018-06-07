import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ProductLanding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // shoes: false,
      // shirts: false,
      // suits: false,
      spring: false,
      summer: false,
      fall: false,
      winter: false,
    }
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this)
  }
  toggleCheckboxChange(event) {
    this.setState({ [event.target.name]: !this.state[event.target.name] })
  }
  //need api routes to Link
  render() {
    const products = this.props.products || []
    console.log(products[0])

    const summer = products.filter(product => {
      return product.season === 'summer' && this.state.summer
    })
    const spring = products.filter(product => {
      return product.season === 'spring' && this.state.spring
    })
    const fall = products.filter(product => {
      return product.season === 'fall' && this.state.fall
    })
    const winter = products.filter(product => {
      return product.season === 'winter' && this.state.winter
    })

    this.filteredProducts = [...summer, ...winter, ...fall, ...spring]

    // seperating products by type
    return (
      <div className="Landing">
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="spring"
              //   checked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
            spring
          </label>
          <label>
            <input
              type="checkbox"
              name="summer"
              //   checked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
            summer
          </label>
          <label>
            <input
              type="checkbox"
              name="fall"
              //   checked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
            fall
          </label>
          <label>
            <input
              type="checkbox"
              name="winter"
              //   checked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
            winter
          </label>
        </div>
        <div>
          <Link to="/products/add">Add Product</Link>
        </div>
        {this.filteredProducts.length
          ? this.filteredProducts.map(product => {
              return (
                <div className="SingleProduct" key={product.id}>
                  <div className="ProductText">
                    <img src={product.imageUrl} />
                    <h3>{product.name}</h3>
                    <p>{product.color}</p>
                  </div>
                </div>
              )
            })
          : products.map(product => {
              return (
                <div className="SingleProduct" key={product.id}>
                  <div className="ProductText">
                    <img src={product.imageUrl} />
                    <h3>{product.name}</h3>
                    <p>{product.color}</p>
                  </div>
                </div>
              )
            })}
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
)(ProductLanding)
