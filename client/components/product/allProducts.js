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
      search: ''

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
  }

  handleSubmit = function (event) {
    event.preventDefault()
    this.setState({
      search: event.target.search.value
    })
    // this.props.getSingleItemKey(event.target.value)
  }

  //need api routes to Link
  render() {
    let products = this.props.products || []
    const user = this.props.user || {}
    products = this.state.search ? products.filter(product => product.name.toLowerCase().includes(this.state.search.toLowerCase())) : products
    products = this.state.spring ? products.filter(product => product.season === 'Spring') : products
    products = this.state.summer ? products.filter(product => product.season === 'Summer') : products
    products = this.state.winter ? products.filter(product => product.season === 'Winter') : products
    products = this.state.autumn ? products.filter(product => product.season === 'Autumn') : products
    products = this.state.pink ? products.filter(product => product.color === 'Pink') : products
    products = this.state.navy ? products.filter(product => product.color === 'Navy') : products
    products = this.state.black ? products.filter(product => product.color === 'Black') : products
    products = this.state.white ? products.filter(product => product.color === 'White') : products
    products = this.state.brown ? products.filter(product => product.color === 'Brown') : products
    products = this.state.maroon ? products.filter(product => product.color === 'Maroon') : products

    // season=Winter&season=Summer&color=Black
    // seperating products by type
    return (
      <div className="Landing">
        <form onSubmit={this.handleSubmit}>
          <input name="search" placeholder="please search here" />
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

        {products.length ? products.map(product => {
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
        }) : null
        }
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


export default connect(
  mapState,
  null
)(AllProducts)
