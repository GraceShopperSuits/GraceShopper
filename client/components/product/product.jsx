import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        const id = this.props.match.params.id
        return(
            <div className= 'ProductComponent'>
                <img src = ''/>
            </div>
        )
    }
}