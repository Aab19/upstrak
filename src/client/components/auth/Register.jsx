import React, { Component } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router"

import { FormContainer } from "../form/formContainer"
import BtnGoogle from "../../components/auth/BtnGoogle"
import Input from "../form/Input"
import Submit from "../../modules/validator-form/ValidateSubmit"
import Button from "../buttons/Button"
import NavBack from "../navigation/NavBack"
import memoize from "memoize-one"
var validationTimeout = null

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.auth && props.auth.username ? props.auth.username : "",
      email: "",
      password: "",
      password_conf: "",
      error: {},
      allowSubmit: false
    }
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    onRegister: PropTypes.func.isRequired,
    validation: PropTypes.func.isRequired
  }

  componentDidMount() {
    Submit.init(this)
  }

  componentDidUpdate() {
    if (
      Submit.ValidateSubmit(this) &&
      !this.state.error["username"] &&
      !this.state.error["email"]
    ) {
      var _this = this
      const { username, email, password } = this.state
      var el = document.getElementById("btn-register")
      if (el) {
        el.blur()
      }
      _this.props.onRegister(username, email, password)
    }

    if (this.props.auth["validate-username"]) {
      this.onValidateUser(this.props.auth["validate-username"].in_progress)
    }

    if (this.props.auth["validate-email"]) {
      this.onValidateEmail(this.props.auth["validate-email"].in_progress)
    }
  }

  onValidateUser = memoize(progress => {
    if (!progress) {
      var error = this.state.error
      if (this.props.auth["validate-username"].status === 200) {
        error.username = undefined
        this.setState({
          error: error
        })
      } else {
        error.username = "Nama pengguna sudah digunakan"
        this.setState({
          error: error
        })
      }
    }
  })

  onValidateEmail = memoize(progress => {
    if (!progress) {
      var error = this.state.error
      if (this.props.auth["validate-email"].status === 200) {
        error.email = undefined
        this.setState({
          error: error
        })
      } else {
        error.email = this.props.auth["validate-email"].message
        this.setState({
          error: error
        })
      }
    }
  })

  onKeyDown(e) {
    if (e.keyCode === 13) {
      Submit.doSubmit(e, this)
    }
  }

  validate(text, id) {
    if ((id === "username" || id === "email") && text !== "") {
      clearTimeout(validationTimeout)

      validationTimeout = setTimeout(() => {
        this.props.validation(text, id)
      }, 500)
    }
  }

  allowSubmit(id, text, error) {
    var state = this.state
    state[id] = text

    if (error) {
      state["allowSubmit"] = false
    } else if (
      state.username &&
      state.email &&
      state.password &&
      state.password_conf &&
      !state.error["username"] &&
      !state.error["email"]
    ) {
      state["allowSubmit"] = true
    } else {
      state["allowSubmit"] = false
    }
    this.setState(state)
  }

  render() {
    return (
      <FormContainer className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4 col-sm-12">
            <NavBack
              action={() => this.props.history.goBack()}
              title="Kembali"
            />
            <h2 className="form-title">Akun baru</h2>
            <div className="form-desc">Belajar asik tanpa ribet</div>
            <Input
              className="form-control text-input"
              refs="username"
              id="username"
              type="text"
              label="Nama Pengguna"
              placeholder="Nama kamu"
              value={this.state}
              message={{
                length: "Nama akun harus 3 - 35 karakter",
                onlytext: "Nama akun hanya mengandung a-z, 0-9 atau _"
              }}
              isSubmit={this.state.isSubmit}
              validate={["required"]}
              onKeyDown={e => this.onKeyDown(e)}
              allowSubmit={(id, text, error) =>
                this.allowSubmit(id, text, error)
              }
              isSuccess={
                this.props.auth["validate-username"] &&
                this.props.auth["validate-username"].status === 200 &&
                !this.props.auth["validate-username"].in_progress
              }
              isLoading={
                this.props.auth["validate-username"] &&
                this.props.auth["validate-username"].in_progress
              }
              listenValue={(value, id) => this.validate(value, id)}
            />
            <Input
              className="form-control text-input"
              refs="email"
              id="email"
              type="email"
              label="Email"
              placeholder="upstrak@email.com"
              value={this.state}
              isSubmit={this.state.isSubmit}
              validate={["required", "email"]}
              onKeyDown={(e, id, text) => this.onKeyDown(e, id, text)}
              allowSubmit={(id, text, error) =>
                this.allowSubmit(id, text, error)
              }
              isSuccess={
                this.props.auth["validate-email"] &&
                this.props.auth["validate-email"].status === 200 &&
                !this.props.auth["validate-email"].in_progress
              }
              isLoading={
                this.props.auth["validate-email"] &&
                this.props.auth["validate-email"].in_progress
              }
              listenValue={(value, id) => this.validate(value, id)}
            />
            <Input
              className="form-control text-input"
              refs="password"
              id="password"
              type="password"
              label="Password"
              placeholder="Minimal 8 karakter"
              message={{
                length: "Kata sandi minimal 8 karakter (huruf dan angka)"
              }}
              value={this.state}
              isSubmit={this.state.isSubmit}
              allowSubmit={(id, text, error) =>
                this.allowSubmit(id, text, error)
              }
              validate={[{ length: { min: 8 } }]}
              onKeyDown={(e, id, text) => this.onKeyDown(e, id, text)}
            />
            <Input
              className="form-control text-input"
              refs="password_conf"
              id="password_conf"
              type="password"
              equalWith="password"
              label="Ulangi password"
              placeholder="Konfirmasi password"
              message={{
                length: "Password tidak cocok"
              }}
              value={this.state}
              isSubmit={this.state.isSubmit}
              allowSubmit={(id, text, error) =>
                this.allowSubmit(id, text, error)
              }
              validate={[{ length: { min: 8 } }, "equals"]}
              onKeyDown={(e, id, text) => this.onKeyDown(e, id, text)}
            />

            <div className="auth-action">
              <Button
                onclick={e => Submit.doSubmit(e, this)}
                text="Buat akun"
                buttonType="pink"
                buttonSize="full"
                customClass="btn-register"
                isLoading={
                  this.props.auth["register"] &&
                  this.props.auth["register"].in_progress
                }>
                Login
              </Button>
              <div className="separator"></div>
                <BtnGoogle
                  title="Masuk dengan Google"
                  isPopup={this.props.isPopup}
                />
            </div>
            </div>
        </div>
      </FormContainer>
    )
  }
}

export default withRouter(Register)
