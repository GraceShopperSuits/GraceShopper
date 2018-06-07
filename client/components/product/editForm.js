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
  componentDidMount() {
    // this.setState({this.product})
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(`we're typing ${event.target.name} ${event.target.value}`)
  }

  handleToggle(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(event.target.value, event.target.name)
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
              min="1"
              max="1000"
              type="number"
              value={this.state.quantity}
              name="quantity"
              onChange={this.handleChange}
              required
            />
          </label>

          <label>
            Season
            <select name="season" value={this.state.season} onChange={this.handleToggle}>
              <option>Fall</option>
              <option>Summer</option>
              <option>Winter</option>
              <option>Spring</option>
            </select>
          </label>
          <label>
            Color
            <select name="color" value={this.state.color} onChange={this.handleToggle}>
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
            <select name="size" value={this.state.size} onChange={this.handleToggle}>
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
    products: state.product
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(event) {
      event.preventDefault()
      const product = {
        ...this.state,
      }
      console.log(product)
      dispatch(updateProduct(product, id))

      this.setState({
        name: '',
        description: '',
        season: '',
        cost: '',
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
