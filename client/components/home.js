import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Materialize from '../../materialize/materialize.min'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var elems = document.querySelectorAll('.carousel')
    let instance = Materialize.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      duration: 500,
    })
    setInterval(() => {
      instance[0].next()
    }, 4000)
  }
  render() {
    return (
      <div id="carousel" className="carousel carousel-slider center">
        <div className="carousel-fixed-item center">
          <Link to="/products" className="btn waves-effect white grey-text darken-text-2">
            Shop Now
          </Link>
        </div>
        <div className="carousel-item white-text" href="#one!">
          <img
            className="responsive-img carousel-image"
            src="https://images.pexels.com/photos/999267/pexels-photo-999267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
        <div className="carousel-item white-text" href="#two!">
          <img
            className="responsive-img carousel-image"
            src="https://images.pexels.com/photos/1093926/pexels-photo-1093926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
        <div className="carousel-item white-text" href="#three!">
          <img
            className="responsive-img carousel-image"
            src="https://images.pexels.com/photos/1143793/pexels-photo-1143793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>
      </div>
    )
  }
}

export default connect(null)(Home)
