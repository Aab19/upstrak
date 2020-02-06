import React, { Component } from "react"
import { Link } from "react-router-dom"
import { LandingCompStyle } from "./style"
import Nav from "../navigation/index"
import Button from "../buttons/Button"

class LandingComp extends Component {
  render() {
    return (
      <LandingCompStyle>
        <div id="main" role="main" className="main container">
          <Nav isLanding />
        </div>
        <section className="section-header">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12">
                <div className="row no-gutters">
                  <div className="col-8">
                    <h1 className="section-header__title">
                      Kembangkan Potensimu Sekarang
                    </h1>
                    <div className="section-header__desc u-marginTop24">
                      Pilih kursus mu dan kembangkan keahlian mu, dan <br />{" "}
                      dapatkan akses selamanya
                    </div>
                    <Link to="/daftar">
                      <Button
                        text="Daftar Sekarang"
                        buttonType="pink"
                        customClass="btn-header u-marginTop40"
                      />
                    </Link>
                  </div>
                </div>
                <img
                  className="section-illustration"
                  src="/assets/img/illustration-landing.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-advantages">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h3 className="section-advantages__title font40">
                  Kelebihan Upstrak
                </h3>
              </div>
              <div className="col-12">
                <div className="row no-gutters d-flex justify-content-between">
                  <div className="col-3 text-center d-flex flex-column align-items-center">
                    <img src="/assets/img/icons/ic-hours.svg" alt="" />
                    <div className="section-advantages__point u-marginTop40 fontMedium font24">
                      Akses Selamanya
                    </div>
                    <div className="section-advantages__desc u-marginTop16 opacity8">
                      Kursus bisa kamu akses selamanya. Dan gratis mendapatkan
                      update
                    </div>
                  </div>
                  <div className="col-3 text-center d-flex flex-column align-items-center">
                    <img src="/assets/img/icons/ic-file.svg" alt="" />
                    <div className="section-advantages__point u-marginTop40 fontMedium font24">
                      File Pendukung
                    </div>
                    <div className="section-advantages__desc u-marginTop16 opacity8">
                      Mempermudah pembelajaran dan tentunya gratis
                    </div>
                  </div>
                  <div className="col-3 text-center d-flex flex-column align-items-center">
                    <img src="/assets/img/icons/ic-easy.svg" alt="" />
                    <div className="section-advantages__point u-marginTop40 fontMedium font24">
                      Mudah
                    </div>
                    <div className="section-advantages__desc u-marginTop16 opacity8">
                      Materi-materi pada kursus dibuat semudah mungkin untuk
                      kamu
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-focus">
          <div className="container">
            <div className="row no-gutters">
              <h1 className="col-12 text-center font40">Fokus utama kami</h1>

              <div className="col-6">
                <div className="bg-focus bg-design"></div>
              </div>

              <div className="col-6 section-focus__detail">
                <div className="section-focus__detail-title fontSemi font32">
                  Desain
                </div>
                <div className="section-focus__detail-desc u-marginTop24 opacity8">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder
                </div>
              </div>

              <div className="col-6 section-focus__detail">
                <div className="section-focus__detail-title fontSemi font32">
                  Pemrograman
                </div>
                <div className="section-focus__detail-desc u-marginTop24 opacity8">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder
                </div>
              </div>

              <div className="col-6">
                <div className="bg-focus bg-program"></div>
              </div>

              <div className="col-6">
                <div className="bg-focus bg-marketing"></div>
              </div>

              <div className="col-6 section-focus__detail">
                <div className="section-focus__detail-title fontSemi font32">
                  Marketing
                </div>
                <div className="section-focus__detail-desc u-marginTop24 opacity8">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder
                </div>
              </div>

              <div className="col-6 section-focus__detail">
                <div className="section-focus__detail-title fontSemi font32">
                  Bisnis
                </div>
                <div className="section-focus__detail-desc u-marginTop24 opacity8">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder
                </div>
              </div>

              <div className="col-6">
                <div className="bg-focus bg-business"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-info">
          <div className="container">
            <div className="row">
              <h1 className="col-12 text-center font40">Tahukan kamu</h1>
              <div className="section-info__desc font24 u-marginTop24 text-center">
                Bahwa kedepannya akan banyak yang menggantikan perkerjaan yang
                bersifat berulang dan akan banyak bot dan aplikasi yang dapat
                menggantikan perkerjaan itu
              </div>
            </div>
          </div>
        </section>

        <section className="section-info__second">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="section-info__second-text font20 opacity8">
                  Dengan adanya Upstrak, kami akan membantu kamu untuk mudah
                  melakukan transisi industri <br /> untuk kedepannya dan kamu
                  juga bisa belajar berbisnis untuk <br /> menciptakan lapangan
                  pekerjaan baru
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-course">
          <div className="container">
            <div className="row text-center d-flex justify-content-center">
              <h1 className="col-12 font40">
                Kami juga ada kursus gratis lhoo
              </h1>
              <div className="col-12 u-marginTop16 opacity8">
                Langsung ikut dan mulai belajar dari kursus gratis. Jangan
                sia-siakan kesempatan emas.
              </div>
              <Link to="/daftar">
                <Button
                  text="Daftar Sekarang"
                  buttonType="pink"
                  customClass="btn-course u-marginTop40"
                />
              </Link>
            </div>
          </div>
        </section>

        <div className="separator"></div>

        <section className="section-about">
          <div className="container">
            <div className="row">
              <div className="col-5 d-flex justify-content-center align-items-center">
                <img src="/assets/img/logo.svg" alt="" />
              </div>
              <div className="col-7">
                <h3 className="section-about__title font24">Tentang Kami</h3>
                <div className="section-about__desc font20 opacity8 u-marginTop24">
                  Upstrak merupakan edu tech yang berfokus pada inovasi digital.
                  Kami menyediakan Platform kursus online untuk orang-orang yang
                  ingin menambah atau meningkatkan kemampuan mereka. Dengan
                  harga yang terjangkau dan materi yang mudah dipahami, serta
                  mendapatkan akses selamanya
                </div>
              </div>
            </div>
          </div>
        </section>
      </LandingCompStyle>
    )
  }
}

export default LandingComp
