import React, { Component } from "react"
import { close } from "../../modules/modal"

class Modal extends Component {
  render() {
    return (
      <div
        className="upstrak-modal modal"
        id="global-modal"
        onClick={this.props.noOutClose ? null : e => close(e)}
        style={{ display: "block" }}>
        {this.props.children}
      </div>
    )
  }
}

export default Modal
