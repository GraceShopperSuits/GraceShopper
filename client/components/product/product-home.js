import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/product'

class ProductLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //need api routes to Link
    render() {
        const products = this.props.products || [];
        console.log(products)
        // const fetchProducts = this.props.fetchProducts;
        return (
            <div className='Landing'>
                {
                    products.map(product => {
                        return (
                            <div className='SingleProduct' key={product.id}>
                                <div className='ProductText'>
                                    <img scr={product.imgUrl} />
                                    <span>{product.name}</span>
                                    <small>{product.color}</small>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapState = state => {
    return {
        products: state.products
    }
}

// const mapDispatch = dispatch => {
//     return {
//         fetchProducts: () => {
//             dispatch(fetchProducts)
//         }
//     }
// }

export default connect(mapState, null)(ProductLanding)