import React, { Component } from 'react'
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