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
          <Link id="logoText" to="/products">
            {' '}
            S
            <img
              id="logo"
              src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDk1Ljg0NCA5NS44NDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDk1Ljg0NCA5NS44NDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjQ3LjkxOCwzOS42OTkgNTIuNzQyLDEyLjY2IDQ4Ljg3Miw3LjMyIDUwLjc3MSwzLjUxMSA0NS4wNjYsMy41MTEgNDYuOTY5LDcuMzIgNDMuMDkzLDEyLjY2ICAgIiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTc1LjU0MSw4Ni42NjloNy42MjFsLTEuOTAyLTMyLjM4OEw3Ny40NDMsMTEuNDNMNTkuMzUsMy44MTJsLTEuOTA1LTMuODA5bC0xLjkwMyw3LjYxOGwtNy42MjMsNDMuODA3TDQwLjMwMSw3LjYxOCAgICBMMzguMzkzLDBMMzYuNDksMy44MDlsLTE4LjA5NCw3LjYxN2wtMy44MTEsNDIuODU1bC0xLjkwMiwzMi4zODhoNy42MTlsNi45NTItNDIuMDMybDIuNTY4LDkuNjM5bC03LjYyMSwzMi4wNDVsMjEuOTA1LDkuNTIzICAgIGwzLjgwOS0xOC43NDNsMy44MDcsMTguNzQzbDIxLjkwOS05LjUyM2wtNy42MjUtMzIuMDQ1bDIuNTctOS42MzlMNzUuNTQxLDg2LjY2OXogTTY3Ljk5OSwyNy4yNTlsLTcuNzQxLDEuMDczbDUuMTE5LTYuMzEyICAgIGwyLjYyMiwyLjAyNlYyNy4yNTl6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
            />IT
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/products">All Products</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="material-icons">shopping_cart 2</i>
                <span className="badge">1</span>
              </Link>
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
          <Link id="logoText" to="/products">
            {' '}
            S
            <img
              id="logo"
              src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDk1Ljg0NCA5NS44NDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDk1Ljg0NCA5NS44NDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjQ3LjkxOCwzOS42OTkgNTIuNzQyLDEyLjY2IDQ4Ljg3Miw3LjMyIDUwLjc3MSwzLjUxMSA0NS4wNjYsMy41MTEgNDYuOTY5LDcuMzIgNDMuMDkzLDEyLjY2ICAgIiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTc1LjU0MSw4Ni42NjloNy42MjFsLTEuOTAyLTMyLjM4OEw3Ny40NDMsMTEuNDNMNTkuMzUsMy44MTJsLTEuOTA1LTMuODA5bC0xLjkwMyw3LjYxOGwtNy42MjMsNDMuODA3TDQwLjMwMSw3LjYxOCAgICBMMzguMzkzLDBMMzYuNDksMy44MDlsLTE4LjA5NCw3LjYxN2wtMy44MTEsNDIuODU1bC0xLjkwMiwzMi4zODhoNy42MTlsNi45NTItNDIuMDMybDIuNTY4LDkuNjM5bC03LjYyMSwzMi4wNDVsMjEuOTA1LDkuNTIzICAgIGwzLjgwOS0xOC43NDNsMy44MDcsMTguNzQzbDIxLjkwOS05LjUyM2wtNy42MjUtMzIuMDQ1bDIuNTctOS42MzlMNzUuNTQxLDg2LjY2OXogTTY3Ljk5OSwyNy4yNTlsLTcuNzQxLDEuMDczbDUuMTE5LTYuMzEyICAgIGwyLjYyMiwyLjAyNlYyNy4yNTl6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
            />IT
          </Link>

          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/products">All Products</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="material-icons">shopping_cart</i>
              </Link>
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
