import styled from "styled-components"

const customType = {
  google: `
    background-color: #ffffff;
    color: rgba(0,0,0,0.84);
  `
}

const SocialButton = styled.span`
  padding: 10px;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    margin-right: 8px;
  }

`
const ButtonSocial = styled(SocialButton)`
  ${props =>
    props.buttonType && customType[props.buttonType]
      ? customType[props.buttonType]
      : ""};
`

export default ButtonSocial
