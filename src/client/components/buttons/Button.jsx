import React, { Component } from "react"
import PropTypes from "prop-types"
import Styled from "styled-components"
import Button from "./index"

const ButtonContainer = Styled.div`
  
`
class ButtonGlobal extends Component {
  static propTypes = {
    customClass: PropTypes.string,
    containerclass: PropTypes.string,
    text: PropTypes.string.isRequired,
    onclick: PropTypes.func,
    isLoading: PropTypes.bool
  }
  render() {
    return (
      <ButtonContainer
        className={this.props.containerClass ? this.props.containerClass : ""}>
        <React.Fragment>
          <Button
            {...this.props}
            id={this.props.id ? this.props.id : ""}
            onClick={!this.props.isLoading ? this.props.onclick : () => {}}
            className={this.props.customClass ? this.props.customClass : ""}>
            {this.props.imageIcon ? (
              <img
                src={`../../assets/img/icons/${this.props.imageIcon}`}
                alt="action-icons"
              />
            ) : null}
            {this.props.text}
          </Button>
        </React.Fragment>
        {this.props.isLoading ? (
          <div className="progress-bar progress-bar--material progress-bar--indeterminate progress-bar--red" />
        ) : null}
      </ButtonContainer>
    )
  }
}

export default ButtonGlobal
