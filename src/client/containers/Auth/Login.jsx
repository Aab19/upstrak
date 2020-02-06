import React, { Component } from "react"
import { connect } from "react-redux"
import LoginForm from "../../components/auth/Login"
import Helmet from "../../components/Helmet"
import { login } from "../../../store/auth/actions"

class Login extends Component {
  onLogin = (email, password) => {
    this.props.dispatch(
      login({
        email,
        password
      })
    )
  }

  render() {
    const { auth } = this.props
    return (
      <React.Fragment>
        <Helmet title="Masuk" />
        <LoginForm auth={auth} onLogin={this.onLogin} />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.Auth }
}

export default connect(mapStateToProps)(Login)
