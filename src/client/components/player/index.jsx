import React, { Component } from "react"
import PropTypes from "prop-types"

class Player extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string
  }

  render() {
    return (
      <React.Fragment>
        <iframe
          className={this.props.className ? this.props.className : ""}
          width="100%"
          height="auto"
          src={this.props.src}
          frameBorder="0"
          scrolling="no"
          allowFullScreen></iframe>
      </React.Fragment>
    )
  }
}

export default Player
