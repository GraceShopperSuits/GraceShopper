import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      season: '',
      type: '',
      cost: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  // handleSubmit(event) {

  // }

  render() {
    return (
      <div>
        <form>
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
        </form>
        <form>
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
        </form>
        <form>
          <label>
            Season
            <input
              type="text"
              value={this.state.season}
              name="season"
              onChange={this.handleChange}
              required
            />
          </label>
        </form>
        <form>
          <label>
            Cost
            <input
              type="text"
              value={this.state.cost}
              name="cost"
              onChange={this.handleChange}
              required
            />
          </label>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = function(state) {
  return {}
}

export const mapDispatchToProps = function(dispatch) {
  return {}
}

export default connect(null)(AddForm)
