import React, { Component } from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class AddForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            season: '',
            type: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {

    }
    /*
    Creating addForm for admin to add products. Type was excluded from form because we want to provide a drop down in case of human error.
    */
    render() {
        return (
            <div>
                <form>
                    <label>
                        Name
                        <input type="text" value={this.state.name} name="name" onChange={this.handleChange} required />
                    </label>
                </form>
                <form>
                    <label>
                        Description
                        <input type="text" value={this.state.description} name="description" onChange={this.handleChange} required />
                    </label>
                </form>
                <form>
                    <label>
                        Season
                        <input type="text" value={this.state.season} name="season" onChange={this.handleChange} required />
                    </label>
                </form>
            </div>
        )
    }
}
=======
import { connect } from 'react-redux'
import { createProduct } from '../../store/product'

class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      season: '',
      type: '',
      cost: '',
      color: '',
      imageUrl: '',
      size: '',
      fit: '',
      quantity: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSubmit = this.props.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(`we're typing ${event.target.name} ${event.target.value}`)
  }

  handleToggle(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(event.target.value, event.target.name)
  }

  // handleSubmit(event) {

  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
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
            Cost
            <input
              type="number"
              value={this.state.cost}
              name="cost"
              onChange={this.handleChange}
              min="1"
              max="1000"
              required
            />
          </label>

          <label>
            Color
            <input
              type="text"
              value={this.state.color}
              name="color"
              onChange={this.handleChange}
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
            Size
            <input
              type="text"
              value={this.state.size}
              name="size"
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
            Clothing Category
            <select name="type" value={this.state.type} onChange={this.handleToggle}>
              <option>shirt</option>
              <option>suit</option>
              <option>shoe</option>
            </select>
          </label>
          <label>
            Fit
            <select name="fit" value={this.state.fit} onChange={this.handleToggle}>
              <option>N/A</option>
              <option>slim</option>
              <option>relaxed</option>
              <option>casual</option>
            </select>
          </label>
          <button type="submit">Submit Product</button>
        </form>
      </div>
    )
  }
}

// export const mapStateToProps = function(state) {
//   return {}
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(event) {
      event.preventDefault()
      const product = {
        ...this.state,
      }
      console.log(product)
      dispatch(createProduct(product))
      this.setState({
        name: '',
        description: '',
        season: '',
        type: '',
        cost: '',
        color: '',
        imageUrl: '',
        size: '',
        fit: '',
        quantity: '',
      })
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddForm)
>>>>>>> fb0370b95f56f0bef232dec6e5af61bbb675a2d2
