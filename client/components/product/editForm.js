import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProduct } from '../../store/product'

class EditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      season: '',
      price: '',
      color: '',
      imageUrl: '',
      size: '',
      quantity: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSubmit = this.props.handleSubmit.bind(this)
  }
  // componentDidMount() {

  // }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleToggle(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const id = this.props.match.params.productId
    const product =
      this.props.products.filter(check => {
        return check.id === +id
      })[0] || {}
    return (
      <div>
        <h1>Editing {product.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              placeholder={product.name}
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Description
            <input
              placeholder={product.description}
              type="text"
              value={this.state.description}
              name="description"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Price
            <input
              placeholder={product.price}
              type="number"
              value={this.state.price}
              name="price"
              onChange={this.handleChange}
              min="1"
              max="1000"
              required
            />
          </label>

          <label>
            Image Url
            <input
              placeholder={product.imageUrl}
              type="text"
              value={this.state.imageUrl}
              name="imageUrl"
              onChange={this.handleChange}
              required
            />
          </label>

          <label>
            quantity
            <input
              placeholder={product.quantity}
              min="1"
              max="1000"
              type="number"
              value={this.state.quantity}
              name="quantity"
              onChange={this.handleChange}
            />
          </label>

          <label>
            Season
            <select
              className="browser-default"
              name="season"
              value={this.state.season}
              onChange={this.handleToggle}
            >
              <option>Please select</option>
              <option>Autumn</option>
              <option>Summer</option>
              <option>Winter</option>
              <option>Spring</option>
            </select>
          </label>

          <label>
            Color
            <select
              className="browser-default"
              name="color"
              value={this.state.color}
              onChange={this.handleToggle}
            >
              <option>Please select</option>
              <option>Black</option>
              <option>Navy</option>
              <option>Brown</option>
              <option>Maroon</option>
              <option>Pink</option>
              <option>White</option>
            </select>
          </label>
          <label>
            Size
            <select
              className="browser-default"
              name="size"
              value={this.state.size}
              onChange={this.handleToggle}
            >
              <option>Please select</option>
              <option>36</option>
              <option>38</option>
              <option>40</option>
              <option>42</option>
              <option>44</option>
              <option>46</option>
            </select>
          </label>
          <button type="submit">Submit Product</button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = function (state) {
  return {
    products: state.product,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(event) {
      event.preventDefault()
      const product = {
        ...this.state,
      }
      dispatch(updateProduct(product, ownProps))

      this.setState({
        name: '',
        description: '',
        season: '',
        price: '',
        color: '',
        imageUrl: '',
        size: '',
        quantity: '',
      })
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm)
