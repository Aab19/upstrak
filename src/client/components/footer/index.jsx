import React from "react"
import { Link } from "react-router-dom"
import FooterStyle from "./style"

const getYear = () => {
  let d = new Date()
  let n = d.getFullYear()

  return n
}

const Footer = props => {
  return (
    <FooterStyle className={props.className ? props.className : ""}>
      <div className="row">
        <div className="col-md-3">
          <div className="footer-brand">
            <Link to="/beranda" className="footer-brand__logo">
              <img src="/assets/img/logo.svg" alt="logo" />
              <div className="title u-marginLeft16">Upstrak</div>
            </Link>
            <div className="footer-slag u-marginTop16">
              Belajar asik tanpa ribet
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="footer-info">
            <div className="footer-info__header fontSemi">Kantor</div>
            <ul className="footer-info__list">
              <li className="footer-info__list-item">upstrak@gmail.com</li>
              <li className="footer-info__list-item">082133029715</li>
              <li className="footer-info__list-item">
                Sleman, Daerah <br />
                Istimewa Yogyakarta
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-3">
          <div className="footer-help">
            <div className="footer-help">
              <div className="footer-help__header fontSemi">Bantuan</div>
              <ul className="footer-help__list">
                <li className="footer-help__list-item">
                  <Link to="">Tata Cara Belajar</Link>
                </li>
                <li className="footer-help__list-item">
                  <Link to="">Pertanyaan Umum</Link>
                </li>
                <li className="footer-help__list-item">
                  <Link to="">Kebijakan dan Privasi</Link>
                </li>
                <li className="footer-help__list-item">
                  <Link to="">Blog Upstrak</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="footer-social">
            <div className="footer-social">
              <div className="footer-social__header fontSemi">Sosial Media</div>
              <ul className="footer-social__list">
                <li className="footer-social__list-item">
                  <Link to="">Instagram</Link>
                </li>
                <li className="footer-social__list-item">
                  <Link to="">Facebook</Link>
                </li>
                <li className="footer-social__list-item">
                  <Link to="">Linkedin</Link>
                </li>
                <li className="footer-social__list-item">
                  <Link to="">Youtube</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center">
        Copyright &copy; {getYear()} Upstrak - All rights reserved
      </div>
    </FooterStyle>
  )
}

export default Footer
