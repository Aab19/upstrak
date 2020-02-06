import React, { Component } from "react"
import styled from "styled-components"

const Alert = styled.span`
  color: ${props => (props.error ? "rgb(255, 0, 0)" : `rgb(255, 0, 0)`)};
  font-size: 12px;
  margin-top: 3px;
  display: block;
  position: absolute;
  left: 16px;
`

class InputAlert extends Component {
  render() {
    return <Alert error>{this.props.message}</Alert>
  }
}
export default InputAlert
