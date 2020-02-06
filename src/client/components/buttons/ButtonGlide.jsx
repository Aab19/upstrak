import React, { Component } from "react"
import PropTypes from "prop-types"
import Button from "./index"

class ButtonGlide extends Component {

  static propTypes = {
    glide: PropTypes.string
  }

  render() {
    return (
      <React.Fragment>
        <Button
          {...this.props}
          id="btn-glide"
          className={this.props.customClass ? this.props.customClass : ""}
          data-glide-dir=">">
          {this.props.text}
        </Button>
      </React.Fragment>
    )
  }
}

export default ButtonGlide
