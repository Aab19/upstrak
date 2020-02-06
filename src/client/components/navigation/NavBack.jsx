import React, { Component } from "react"
import { Link } from "react-router-dom"
// Component
import Nav from "./nav"
import { Back } from "./nav"
import PropTypes from "prop-types"

class NavBack extends Component {
  static propTypes = {
    action: PropTypes.func.isRequired,
    title: PropTypes.string
  }

  render() {
    const { title } = this.props
    return (
      <Nav>
        <Back>
          <div className="navbar-back" onClick={() => this.props.action()}>
            {this.props.white ? (
              <img
                className="navbar-back__arrow"
                src="/assets/img/icons/arrow-back-white.svg"
                alt=""
              />
            ) : (
              <img
                className="navbar-back__arrow"
                src="/assets/img/icons/arrow_back.svg"
                alt=""
              />
            )}

            <div className="navbar-back__text">{title}</div>
          </div>
        </Back>
      </Nav>
    )
  }
}

export default NavBack
