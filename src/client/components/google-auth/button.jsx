import React, { Component } from "react"
import BtnSocial from "../buttons/social"

class ButtonContent extends Component {
  render() {
    return (
      <BtnSocial
        buttonType="google">
        {this.props.children}{" "}
        <img src="/assets/img/icons/google.svg" alt="Google" />
      </BtnSocial>
    )
  }
}

export default ButtonContent
