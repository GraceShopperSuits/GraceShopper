import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addItemThunk, removeItemThunk } from '../../store'

import Materialize from '../../../materialize/materialize.min'

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
    let filteredSeasons = []
    filteredSeasons.push(
      ...(this.state.spring ? products.filter(product => product.season === 'Spring') : [])
    )
    filteredSeasons.push(
      ...(this.state.summer ? products.filter(product => product.season === 'Summer') : [])
    )
    filteredSeasons.push(
      ...(this.state.autumn ? products.filter(product => product.season === 'Autumn') : [])
    )
    filteredSeasons.push(
      ...(this.state.winter ? products.filter(product => product.season === 'Winter') : [])
    )
    if (!filteredSeasons.length) {
      filteredSeasons = products
    }
    let filteredColors = []
    filteredColors.push(
      ...(this.state.pink ? filteredSeasons.filter(product => product.color === 'Pink') : [])
    )
    filteredColors.push(
      ...(this.state.navy ? filteredSeasons.filter(product => product.color === 'Navy') : [])
    )
    filteredColors.push(
      ...(this.state.black ? filteredSeasons.filter(product => product.color === 'Black') : [])
    )
    filteredColors.push(
      ...(this.state.white ? filteredSeasons.filter(product => product.color === 'White') : [])
    )
    filteredColors.push(
      ...(this.state.brown ? filteredSeasons.filter(product => product.color === 'Brown') : [])
    )
    filteredColors.push(
      ...(this.state.maroon ? filteredSeasons.filter(product => product.color === 'Maroon') : [])
    )
    if (!filteredColors.length) {
      filteredColors = filteredSeasons
    }
    products = filteredColors
    // season=Winter&season=Summer&color=Black
    // seperating products by type

    // let toast =
    //   '<span>Added to cart!</span><button class="btn-flat toast-action" onClick={this.props.removeItem(product.id)}>Undo</button>'

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
                      <div className="col s3 card-parent" key={product.id}>
                        <div className="card">
                          <div className="card-image">
                            <img className="responsive-img" src={product.imageUrl} />
                            <a
                              className="btn-floating halfway-fab waves-effect waves-light black"
                              onClick={() => {
                                this.props.addItem(product.id)
                                // toast here
                                Materialize.toast({
                                  html: '<span>Added to cart!</span>',
                                })
                              }}
                            >
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

const mapDispatch = dispatch => {
  return {
    addItem: itemId => {
      dispatch(addItemThunk(itemId))
    },
    removeItem: itemId => {
      dispatch(removeItemThunk(itemId))
    },
  }
}

export default connect(
  mapState,
  mapDispatch
)(AllProducts)
