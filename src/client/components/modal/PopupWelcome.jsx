import React, { Component } from "react"
import Button from "../buttons/Button"
import PropTypes from "prop-types"
import { PopupWelcomeStyle } from "./style"
import Glide from "@glidejs/glide"
import ButtonGlide from "../buttons/ButtonGlide"
import FieldInterest from "../form/FieldInterest"

if (typeof window !== "undefined") {
  require("@glidejs/glide/dist/css/glide.core.min.css")
}

class PopupWelcome extends Component {
  static propTypes = {
    auth: PropTypes.object,
    setFirst: PropTypes.func
  }

  componentDidMount() {
    var glide = new Glide(".glide", {
      type: "carousel",
      perView: 1,
      touchAngle: 0
    })

    glide.mount()
  }

  setFirstUse = () => {
    this.props.setFirst()
    this.props.resetNoOutClose()
    this.props.closeModal()
  }

  render() {
    return (
      <PopupWelcomeStyle>
        <div className="modal-content">
          <PopupWelcomeStyle>
            <div className="modal-content__box">
              <div id="glide" className="glide">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    <li className="glide__slide">
                      <img src="/assets/img/welcome.svg" alt="" />
                      <div className="modal-title fontSemi font32 u-marginTop32">
                        Selamat Datang!
                      </div>
                      <div className="modal-desc opacity8 u-marginTop8">
                        Selamat bergabung dan kembangkan kemampuan mu.
                      </div>
                      <div data-glide-el="controls">
                        <ButtonGlide
                          buttonType="pink"
                          text="Lanjut"
                          customClass="modal-btn u-marginTop40"
                          glide=">"
                        />
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="modal-title fontSemi font32">
                        Apa minat kamu?
                      </div>
                      <div className="modal-desc opacity8 u-marginTop8">
                        Silahkan isi minat kamu, maksimal 2 yaa.
                      </div>
                      <FieldInterest className="u-marginTop40" />
                      <Button
                        customClass="modal-btn u-marginTop40"
                        buttonType="pink"
                        text="Simpan"
                        onclick={() => this.setFirstUse()}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </PopupWelcomeStyle>
        </div>
      </PopupWelcomeStyle>
    )
  }
}

export default PopupWelcome
