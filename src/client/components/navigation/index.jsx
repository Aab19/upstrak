import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../../store/auth/actions"
import Nav from "./nav"
import Button from "../buttons/Button"
import Dropdown from "../../modules/dropdown"
import DropdownContainer from "../dropdown/index"

class Navigation extends Component {
  state = {
    showNav: false
  }

  componentDidMount() {
    Dropdown()
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    isLanding: PropTypes.bool
  }

  onLogout = () => {
    this.props.dispatch(logout())
  }

  showNavigationMobile = () => {
    this.setState({ showNav: !this.state.showNav })
  }

  render() {
    let active = this.props.location.pathname
    return (
      <Nav>
        <Link to="/beranda" className="navbar-logo">
          <img src="/assets/img/logo.svg" alt="" />
          <div className="title">Upstrak</div>
        </Link>

        <div className="navbar-right">
          {this.props.isLanding ? (
            <ul className="navbar-list">
              <li
                className={`navbar-list__item ${
                  active === "/beranda" ? "active" : ""
                }`}>
                <Link to="/beranda">Beranda</Link>
              </li>
              <li
                className={`navbar-list__item ${
                  active === "/tentang" ? "active" : ""
                }`}>
                <Link to="/beranda">Tentang Kami</Link>
              </li>
              <li
                className={`navbar-list__item ${
                  active === "/kelebihan" ? "active" : ""
                }`}>
                <Link to="/beranda">Kelebihan Kami</Link>
              </li>
              <li
                className={`navbar-list__item ${
                  active === "/kelebihan" ? "active" : ""
                }`}>
                <Link to="/masuk">
                  <Button
                    text="Masuk"
                    buttonType="pink"
                    customClass="btn-nav"
                  />
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-list">
              <li
                className={`navbar-list__item ${
                  active === "/beranda" ? "active" : ""
                }`}>
                <Link to="/beranda">Beranda</Link>
              </li>
              <li
                className={`navbar-list__item ${
                  active === "/pembelian" ? "active" : ""
                }`}>
                <Link to="/pembelian">Pembelian</Link>
              </li>
              <li
                className={`navbar-list__item ${
                  active === "/kursus/kursus-ku" ? "active" : ""
                }`}>
                <Link to="/kursus/kursus-ku">Kursus ku</Link>
              </li>
              <DropdownContainer>
                <div className="dropdown dropdown--mobile">
                  <li
                    className={`navbar-list__item dropbtn dropdown__toggle fontMedium ${
                      active === `/${this.props.name}` ? "active" : ""
                    }`}>
                    {this.props.name}
                    <img
                      src="/assets/img/ava-default.png"
                      alt=""
                      className="navbar-list__item-avatar"
                    />
                  </li>
                  <ul className="dropdown__menu dropdown-content">
                    <li>
                      <Link
                        to={`/${this.props.name}`}
                        className="violet fontMedium">
                        Profil kamu
                      </Link>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        onClick={() => this.onLogout()}
                        className="fontMedium opacity8">
                        Keluar
                      </a>
                    </li>
                  </ul>
                </div>
              </DropdownContainer>
            </ul>
          )}
        </div>

        <div
          className="navbar-toggle"
          onClick={() => this.showNavigationMobile()}>
          <img
            src="/assets/img/icons/ic-navbar-toogle.svg"
            alt="navbar-toggle"
          />
        </div>

        <div
          className="navbar-mobile"
          style={this.state.showNav ? { right: "0" } : null}>
          <img
            src="/assets/img/icons/ic-close-mobile.svg"
            alt="close"
            className="navbar-mobile__close"
            onClick={() => this.showNavigationMobile()}
          />
          <ul className="navbar-mobile__list">
            <li className="navbar-mobile__list-item active">
              <Link to="/beranda">Beranda</Link>
            </li>
            <li className="navbar-mobile__list-item">
              <Link to="/beranda">Pembelian</Link>
            </li>
            <li className="navbar-mobile__list-item">
              <Link to="/beranda">Kursus ku</Link>
            </li>
            <li className="navbar-mobile__list-item">
              <Link to="/beranda">Profil kamu</Link>
            </li>
            <li className="navbar-mobile__list-item navbar-mobile__username fontMedium">
              {this.props.name}
              <img
                src="/assets/img/ava-default.png"
                alt=""
                className="navbar-list__item-avatar"
              />
            </li>
            <li className="navbar-mobile__list-item">
              <a
                href="javascript:;"
                onClick={() => this.onLogout()}
                className="navbar-mobile__logout pink opacity8">
                Keluar
              </a>
            </li>
          </ul>
        </div>
      </Nav>
    )
  }
}

export default connect()(withRouter(Navigation))
