import React, { Component } from "react"
import PropTypes from "prop-types"
import firebase from "../../modules/firebase"
import ButtonContent from "./button"
import localStorage from "../../modules/localStorage"

class GoogleLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      hovered: false,
      active: false
    }
  }
  componentDidMount() {
    var _this = this
    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        if (result.credential) {
          _this.props.onSuccess(result)
        }
        // The signed-in user info.
        var user = result.user
      })
      .catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        var email = error.email
        var credential = error.credential
      })
  }
  signIn = () => {
    if (this.props.isPopup) {
      localStorage.setItem("is_google", 1)
    }
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly")
    firebase.auth().languageCode = "id"
    firebase.auth().signInWithRedirect(provider)
  }

  render() {
    const {
      tag,
      type,
      className,
      disabledStyle,
      buttonText,
      children,
      theme,
      additionalStyle
    } = this.props

    const { disabled } = this.state

    const initialStyle = {
      backgroundColor: theme === "dark" ? "rgb(66, 133, 244)" : "#fff",
      display: "inline-flex",
      alignItems: "center",
      color: theme === "dark" ? "#fff" : "rgba(0, 0, 0, .54)",
      boxShadow: "0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",
      padding: 0,
      borderRadius: 2,
      border: "1px solid transparent",
      fontSize: 14,
      fontWeight: "500",
      width: "100%"
    }

    const hoveredStyle = {
      cursor: "pointer",
      opacity: 0.9
    }

    const activeStyle = {
      cursor: "pointer",
      backgroundColor: theme === "dark" ? "#3367D6" : "#eee",
      color: theme === "dark" ? "#fff" : "rgba(0, 0, 0, .54)",
      opacity: 1
    }

    const defaultStyle = (() => {
      if (disabled) {
        return Object.assign({}, initialStyle, disabledStyle)
      }

      if (this.state.active) {
        if (theme === "dark") {
          return Object.assign({}, initialStyle, activeStyle)
        }

        return Object.assign({}, initialStyle, activeStyle)
      }

      if (this.state.hovered) {
        return Object.assign({}, initialStyle, hoveredStyle)
      }

      return initialStyle
    })()
    const googleLoginButton = React.createElement(
      tag,
      {
        onMouseEnter: () => this.setState({ hovered: true }),
        onMouseLeave: () => this.setState({ hovered: false, active: false }),
        onMouseDown: () => this.setState({ active: true }),
        onMouseUp: () => this.setState({ active: false }),
        onClick: () => this.signIn(),
        style: defaultStyle,
        type,
        disabled,
        className
      },
      [<ButtonContent key={2}>{children || buttonText}</ButtonContent>]
    )

    return googleLoginButton
  }
}

GoogleLogin.propTypes = {
  buttonText: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
  type: PropTypes.string,
  render: PropTypes.func,
  theme: PropTypes.string,
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func
}

GoogleLogin.defaultProps = {
  type: "button",
  tag: "button",
  buttonText: "Sign in with Google",
  accessType: "online",
  isSignedIn: false,
  disabledStyle: {
    opacity: 0.6
  },
  theme: "light"
}

export default GoogleLogin
