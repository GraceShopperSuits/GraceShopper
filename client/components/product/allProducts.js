import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchProductThunk } from '../../store/searchReducer'

class AllProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spring: false,
      summer: false,
      autumn: false,
      winter: false,
      black: false,
      navy: false,
      maroon: false,
      pink: false,
      white: false,
      brown: false,

    }
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  toggleCheckboxChange(event) {
    this.setState({ [event.target.name]: !this.state[event.target.name] })
  }

  handleChange = function (event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log('handleChange', event.target.value)
  }

  handleSubmit = function (event) {
    event.preventDefault()
    this.props.getSingleItemKey(event.target.value)
    console.log('state', this.state)
  }

  //need api routes to Link
  render() {
    const products = this.props.products || []
    const user = this.props.user || {}
    const summer = products.filter(product => {
      return product.season === 'Summer' && this.state.summer
    })
    const spring = products.filter(product => {
      return product.season === 'Spring' && this.state.spring
    })
    const autumn = products.filter(product => {
      return product.season === 'Autumn' && this.state.autumn
    })
    const winter = products.filter(product => {
      return product.season === 'Winter' && this.state.winter
    })
    const black = products.filter(product => {
      return product.color === 'Black' && this.state.black
    })
    const navy = products.filter(product => {
      return product.color === 'Navy' && this.state.navy
    })
    const maroon = products.filter(product => {
      return product.color === 'Maroon' && this.state.maroon
    })
    const pink = products.filter(product => {
      return product.color === 'Pink' && this.state.pink
    })
    const white = products.filter(product => {
      return product.color === 'White' && this.state.white
    })
    const brown = products.filter(product => {
      return product.color === 'Brown' && this.state.brown
    })

    this.filteredProducts = [
      ...summer,
      ...winter,
      ...autumn,
      ...spring,
      ...black,
      ...navy,
      ...maroon,
      ...pink,
      ...white,
      ...brown,
    ]
    // season=Winter&season=Summer&color=Black
    // seperating products by type
    console.log(user.admin)
    return (
      <div className="Landing">
        <form onSubmit={this.handleSubmit}>
          <input name="search" placeholder="please search here" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        {user.admin ? (
          <div>
            <Link to="/products/add">Add Product</Link>
          </div>
        ) : null}
        <div className="checkbox">
          <label>Select a season: </label>
          <label>
            <input
              type="checkbox"
              name="spring"
              onChange={this.toggleCheckboxChange}
              value="Spring"
            />
            Spring{' '}
          </label>
          <label>
            <input type="checkbox" name="summer" onChange={this.toggleCheckboxChange} />
            Summer
          </label>
          <label>
            <input type="checkbox" name="autumn" onChange={this.toggleCheckboxChange} />
            Autumn
          </label>
          <label>
            <input type="checkbox" name="winter" onChange={this.toggleCheckboxChange} />
            Winter
          </label>
        </div>

        <div className="checkbox">
          <label>Select a color: </label>
          <label>
            <input type="checkbox" name="black" onChange={this.toggleCheckboxChange} />
            Black
          </label>
          <label>
            <input type="checkbox" name="navy" onChange={this.toggleCheckboxChange} />
            Navy
          </label>
          <label>
            <input type="checkbox" name="maroon" onChange={this.toggleCheckboxChange} />
            Maroon
          </label>
          <label>
            <input type="checkbox" name="pink" onChange={this.toggleCheckboxChange} />
            Pink
          </label>
          <label>
            <input type="checkbox" name="white" onChange={this.toggleCheckboxChange} />
            White
          </label>
          <label>
            <input type="checkbox" name="brown" onChange={this.toggleCheckboxChange} />
            Brown
          </label>
        </div>

        {this.filteredProducts.length
          ? this.filteredProducts.map(product => {
            return (
              <Link to={`/products/${product.id}`} key={product.id}>
                <div className="SingleProduct">
                  <div className="ProductText">
                    <img src={product.imageUrl} />
                    <h3>{product.name}</h3>
                    <p>{product.color}</p>
                    <p>{product.season}</p>
                  </div>
                </div>
              </Link>
            )
          })
          : products.map(product => {
            return (
              <Link to={`/products/${product.id}`} key={product.id}>
                <div className="SingleProduct">
                  <div className="ProductText">
                    <img src={product.imageUrl} />
                    <h3>{product.name}</h3>
                    <p>{product.color}</p>
                    <p>{product.season}</p>
                  </div>
                </div>
              </Link>
            )
          })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.product,
    user: state.user,
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleItemKey: (searchedItem) => {
      console.log('dispatch key is hit')

      // dispatch(searchProductThunk(searchedItem))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(AllProducts)
