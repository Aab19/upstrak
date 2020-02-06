import React, { Component } from "react"
import { connect } from "react-redux"
import { register, validation } from "../../../store/auth/actions"
import RegisterForm from "../../components/auth/Register"
import Helmet from "../../components/Helmet"

class Register extends Component {
  onRegister = (username, email, password) => {
    this.props.dispatch(
      register({
        form: {
          username,
          email,
          password
        }
      })
    )
  }

  validation = (value, type) => {
    var form = {}
    if (type === "username") {
      form = {
        username: value
      }
    } else {
      form = {
        email: value
      }
    }
    this.props.dispatch(
      validation({
        filter: type === "username" ? "validate-username" : "validate-email",
        form: form
      })
    )
  }

  render() {
    const { auth } = this.props
    return (
      <React.Fragment>
        <Helmet title="Daftar" />
        <RegisterForm
          auth={auth}
          onRegister={this.onRegister}
          validation={this.validation}
        />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.Auth }
}

export default connect(mapStateToProps)(Register)
