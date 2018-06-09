import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

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
      search: '',
    }
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  toggleCheckboxChange(event) {
    this.setState({ [event.target.name]: !this.state[event.target.name] })
  }

  handleChange = function(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = function(event) {
    event.preventDefault()
    this.setState({
      search: event.target.search.value,
    })
  }

  //need api routes to Link
  render() {
    let products = this.props.products || []
    const user = this.props.user || {}
    products = this.state.search
      ? products.filter(product =>
          product.name.toLowerCase().includes(this.state.search.toLowerCase())
        )
      : products
    products = this.state.spring
      ? products.filter(product => product.season === 'Spring')
      : products
    products = this.state.summer
      ? products.filter(product => product.season === 'Summer')
      : products
    products = this.state.winter
      ? products.filter(product => product.season === 'Winter')
      : products
    products = this.state.autumn
      ? products.filter(product => product.season === 'Autumn')
      : products
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
        {user.admin ? (
          <div>
            <Link className="btn-small" to="/products/add">
              Add Product
            </Link>
          </div>
        ) : null}

        <div className="row">
          <div className="col s2">
            <form className="checkbox">
              <p>Select a season: </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="spring"
                    onChange={this.toggleCheckboxChange}
                    value="Spring"
                  />
                  <span>Spring</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="summer"
                    onChange={this.toggleCheckboxChange}
                    value="Summer"
                  />
                  <span>Summer</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="autumn"
                    onChange={this.toggleCheckboxChange}
                    value="Autumn"
                  />
                  <span>Autumn</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="winter"
                    onChange={this.toggleCheckboxChange}
                    value="Winter"
                  />
                  <span>Winter</span>
                </label>
              </p>
            </form>

            <div className="checkbox">
              <p>Select a color: </p>
              <p>
                <label>
                  <input type="checkbox" name="black" onChange={this.toggleCheckboxChange} />
                  <span>Black</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" name="navy" onChange={this.toggleCheckboxChange} />
                  <span>Navy</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" name="maroon" onChange={this.toggleCheckboxChange} />
                  <span>Maroon</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" name="brown" onChange={this.toggleCheckboxChange} />
                  <span>Brown</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" name="pink" onChange={this.toggleCheckboxChange} />
                  <span>Pink</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" name="white" onChange={this.toggleCheckboxChange} />
                  <span>White</span>
                </label>
              </p>{' '}
            </div>
          </div>
          <div className="col s10">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field">
                <input name="search" placeholder="please search here" />
              </div>
            </form>
            <div className="row">
              {products.length
                ? products.map(product => {
                    return (
                      <div className="col s3" key={product.id}>
                        <div className="card">
                          <div className="card-image">
                            <img src={product.imageUrl} />
                            <a className="btn-floating halfway-fab waves-effect waves-light red">
                              <i className="material-icons">add_shopping_cart</i>
                            </a>
                          </div>
                          <div className="card-content">
                            <Link to={`/products/${product.id}`} key={product.id}>
                              <span className="card-title">{product.name}</span>
                              <p>{`$${product.price}`}</p>
                              <p>{product.color}</p>
                              <p>{`${product.season} Collection`}</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  })
                : null}
            </div>
          </div>
        </div>
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
