import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ProductLanding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shoes: false,
      shirts: false,
      suits: false,
    }
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this)
  }
  toggleCheckboxChange(event) {
    this.setState({ [event.target.name]: !this.state[event.target.name] })
  }
  //need api routes to Link
  render() {
    const products = this.props.products || []

    const shoes = products.filter(product => {
      return product.type === 'shoe' && this.state.shoes
    })

    const shirts = products.filter(product => {
      return product.type === 'shirt' && this.state.shirts
    })

    const suits = products.filter(product => {
      return product.type === 'suit' && this.state.suits
    })

    this.filteredProducts = [...shoes, ...shirts, ...suits]

    // seperating products by type
    return (
      <div className="Landing">
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="suits"
              //   checked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
            suits
          </label>
          <label>
            <input
              type="checkbox"
              name="shirts"
              //   checked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
            shirts
          </label>
          <label>
            <input
              type="checkbox"
              name="shoes"
              //   checked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
            shoes
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
