import React, { Component } from "react"
import PropTypes from "prop-types"

import { FormContainer } from "../form/formContainer"
import BtnGoogle from "../../components/auth/BtnGoogle"
import Input from "../form/Input"
import Submit from "../../modules/validator-form/ValidateSubmit"
import Button from "../buttons/Button"
import { Link } from "react-router-dom"

class Login extends Component {
  state = {
    email: "",
    password: "",
    allowSubmit: false
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired
  }

  componentDidMount() {
    Submit.init(this)
  }

  componentDidUpdate() {
    if (Submit.ValidateSubmit(this)) {
      const { email, password } = this.state
      this.props.onLogin(email, password)
    }
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      Submit.doSubmit(e, this)
    }
  }

  allowSubmit(id, text, error) {
    var state = this.state
    state[id] = text
    if (error) {
      state["allowSubmit"] = false
    } else if (state.email && state.password) {
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
            <img className="form-logo" src="/assets/img/logo.svg" alt="" />
            <h2 className="form-title">Login akun</h2>
            <div className="form-desc">Login untuk mulai belajar</div>
            <Input
              className="form-control text-input"
              refs="email"
              id="email"
              type="email"
              label="Email"
              placeholder="upstrak@email.com"
              value={this.state}
              message={{
                length: "Nama email harus valid"
              }}
              isSubmit={this.state.isSubmit}
              validate={["required", "email"]}
              onKeyDown={e => this.onKeyDown(e)}
              allowSubmit={(id, text, error) =>
                this.allowSubmit(id, text, error)
              }
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
              onKeyDown={e => this.onKeyDown(e)}
              allowSubmit={(id, text, error) =>
                this.allowSubmit(id, text, error)
              }
              validate={[{ length: { min: 8 } }]}
            />

            {/* <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Ingat saya
              </label>
            </div> */}

            <div className="auth-action">
              <Button
                onclick={e => Submit.doSubmit(e, this)}
                text="Masuk akun saya"
                buttonType="pink"
                buttonSize="full"
                customClass="btn-login">
                Login
              </Button>
              <Link to="" className="forgot-password">
                Lupa password
              </Link>
              <div className="separator"></div>
              <Link to="/daftar">
                <Button
                  text="Daftar akun baru"
                  buttonType="borderPink"
                  buttonSize="full"
                  customClass="btn-register">
                  Register
                </Button>
              </Link>
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

export default Login
