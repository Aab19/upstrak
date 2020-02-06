import React, { Component } from "react"

class Spinner extends Component {
  static defaultProps = {
    customClass: "",
    style: {},
  }
  render() {
    return <div className={`spinner ${this.props.customClass}`} style={this.props.style} />
  }
}

export default Spinner
