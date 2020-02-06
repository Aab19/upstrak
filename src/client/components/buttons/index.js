import styled from "styled-components"
import PropTypes from "prop-types"

const customColor = {
  pink: `
    background: #f63e7c;
    color: #fff;
    position: relative;

    &:hover {
      background: #f63e7c;
      color: #fff;
    }

  `,
  borderPink: `
    background: transparent;
    color: #f63e7c;
    position: relative;
    border: 1px solid 

    &:hover {
      background: transparent;
      color: #f63e7c;
    }
  `,
  transparentPink: `
    background: rgba(246, 62, 124, 0.1);
    color: #f63e7c;
    position: relative;
    opacity: 0.87;

    &:hover {
      background: rgba(246, 62, 124, 0.1);
      color: #f63e7c;
      opacity: 0.87;
    }
  `
}

let customSize = {
  block: `
    display: flex;
    width: 100%;
  `,

  small: `
    font-size: 12px;
    line-height: 1.25;
    padding-left: 8px;
    padding-right: 8px;
  `,

  large: `
    font-size: 24px;
  `,

  full: `
    width: 100%;
  `
}

customSize.block_large = `${customSize.block}${customSize.large}`

const customActions = {
  disabled: `
    opacity: .5;
    cursor: not-allowed !important;
  `
}

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-pack: center;
  white-space: nowrap;
  outline: none;
  border: none;
  font-size: 16px;
  border-radius: 4px;
  padding: 8px 20px;
  font-weight: 600;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover,
  &:active {
    background-color: #eee;
    color: #444;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`
const Button = styled(BaseButton)`
  ${props =>
    props.buttonType && customColor[props.buttonType]
      ? customColor[props.buttonType]
      : ""};
  ${props =>
    props.buttonShadow && customColor[props.buttonShadow]
      ? customColor[props.buttonShadow]
      : ""};
  ${props =>
    props.buttonSize && customSize[props.buttonSize]
      ? customSize[props.buttonSize]
      : ""};
  ${props =>
    props.buttonActions && customActions[props.buttonActions]
      ? customActions[props.buttonActions]
      : ""};
`

Button.propTypes = {
  buttonActions: PropTypes.oneOf(["disabled", ""]),
  buttonSize: PropTypes.oneOf([
    "block",
    "small",
    "large",
    "block_large",
    "full",
    ""
  ]),
  buttonType: PropTypes.oneOf(["pink", "borderPink", "transparentPink" , ""])
}

Button.defaultProps = {
  buttonActions: "",
  buttonType: "pink",
  buttonSize: ""
}

export default Button
