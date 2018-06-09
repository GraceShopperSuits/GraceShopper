import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div className="nav-wrapper">
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/products">All Products</Link>
            </li>
            <li>
              <Link to="/cart"><i className="material-icons">shopping_cart</i></Link>
            </li>
            <li>
              <a href="#" onClick={handleClick}>
                Logout
          </a>
            </li>
          </ul>
        </div>
      ) : (
          <div className="nav-wrapper">
            {/* The navbar will show these links before you log in */}
            <Link to="/home">Home</Link>

            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/products">All Products</Link>
              </li>
              <li>
                <Link to="/cart"><i className="material-icons">shopping_cart</i></Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        )}
    </nav>
    {/* <hr /> */}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
  }
}

export default connect(
  mapState,
  mapDispatch
)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
