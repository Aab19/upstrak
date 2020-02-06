import React, { Component } from "react"
import { withRouter } from "react-router"
import PropTypes from "prop-types"
import Loadable from "react-loadable"
import { DetailCourseStyle } from "./style"
import Button from "../buttons/Button"
import Player from "../player/index"
import Plyr from "plyr"
import Accordion from "../accordion/index"
import DetailCourseShimmer from "./components/DetailCourseShimmer"

const ImageLightbox = Loadable({
  loading() {
    return <div />
  },
  loader: () => import("../lightbox/index")
})

class DetailCourseComp extends Component {
  static propTypes = {
    course: PropTypes.object
  }

  componentDidMount() {
    setTimeout(() => {
      const player = new Plyr("#player", {
        controls: ["play", "progress", "current-time", "fullscreen"],
        // loadSprite: false,
        hideControls: false
      })
    }, 500)
  }

  state = {
    openPopup: false,
    position: 0
  }

  getImages = data => {
    var images = []
    data.map((val, key) => {
      images.push(val)
    })
    return images
  }

  togglePopup = (idx = 0) => {
    this.setState({
      openPopup: !this.state.openPopup,
      position: idx
    })
  }

  getContent = course => {
    if (!course || (course && course.in_progress)) {
      return <DetailCourseShimmer />
    } else {
      return (
        <React.Fragment>
          <div className="course-header">
            <div className="container">
              <div className="row m-0 justify-content-center">
                <div className="col-6 text-center">
                  <h2 className="course-header__title">
                    {course.course_title}
                  </h2>

                  <div className="course-header__mentor u-marginTop24">
                    <div className="title opacity8">Mentor</div>
                    <div className="name u-marginTop8 fontSemi">
                      {course.course_instructor}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="course-content">
            <div className="container">
              <div className="row">
                <div className="col-7 offset-1">
                  <div className="course-content_welcome-video">
                    <div className="course-content__wrapper-frame">
                      <div className="plyr__video-embed" id="player">
                        <Player
                          className="course-content__frame"
                          src={course.course_materials.map((val, key) => {
                            return val.video_url
                          })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="course-content__spec">
                    <div className="title font22 fontSemi">
                      Kebutuhan Minimal
                    </div>
                    <div className="separator"></div>
                    <div className="list-spec">
                      <div className="title font12 opacity8">
                        Sistem operasi
                      </div>
                      <div className="desc u-marginTop4 font18 fontMedium">
                        {course.course_hardware.os}
                      </div>
                    </div>
                    <div className="list-spec">
                      <div className="title font12 opacity8">Processor</div>
                      <div className="desc u-marginTop4 font18 fontMedium">
                        {course.course_hardware.cpu}
                      </div>
                    </div>
                    <div className="list-spec">
                      <div className="title font12 opacity8">RAM</div>
                      <div className="desc u-marginTop4 font18 fontMedium">
                        {course.course_hardware.memory}
                      </div>
                    </div>
                    <div className="list-spec">
                      <div className="title font12 opacity8">Penyimpanan</div>
                      <div className="desc u-marginTop4 font18 fontMedium">
                        {course.course_hardware.storage}
                      </div>
                    </div>

                    <Button
                      text="Mulai Belajar"
                      buttonType="pink"
                      buttonSize="full"
                      customClass="btn-start"
                      onclick={() =>
                        this.props.history.push(
                          `/kursus/${this.props.match.params.encrypt}/${course.course_slug}/start/1`
                        )
                      }
                    />
                  </div>
                </div>

                <div className="col-7 offset-1">
                  <div className="row">
                    <div className="col-12">
                      <div className="course-about">
                        <div className="title font24 fontSemi">
                          Tentang kursus
                        </div>
                        <p className="desc u-marginTop16 opacity8">
                          {course.course_description}
                        </p>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="course-screenshots">
                        <div className="title font24 fontSemi">
                          Screenshoots
                        </div>
                        <div className="desc u-marginTop16 opacity8">
                          Materi-materi yang akan ada di kursus ini
                        </div>
                        <div className="course-screenshot__gallery u-marginTop16">
                          <div className="row margin0">
                            {course.course_screenshots.map((val, key) => {
                              return (
                                <a
                                  className="col-3 course-screenshot__list"
                                  href="javascript:;"
                                  key={key}>
                                  <div
                                    className="course-screenshot__list-item"
                                    style={{
                                      background: `url(${val}) no-repeat center center`
                                    }}
                                    onClick={() => this.togglePopup(key)}></div>
                                </a>
                              )
                            })}
                          </div>

                          {this.state.openPopup ? (
                            <ImageLightbox
                              position={this.state.position}
                              togglePopup={this.togglePopup}
                              images={this.getImages(course.course_screenshots)}
                            />
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="course-materi">
                        <div className="title font24 fontSemi">
                          Materi kursus
                        </div>
                        <p className="desc u-marginTop16 opacity8">
                          Materi yang akan dipelajari di course ini
                        </p>
                        <div className="course-mater__accordion u-marginTop16">
                          {course.course_materials.map((val, key) => {
                            return (
                              <Accordion
                                key={key}
                                id={val.material_id}
                                title={val.title}
                                content={val.description}
                                locked={course.is_locked}
                              />
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <div className="course-price">
                    <div className="course-price__wrapper">
                      <div className="course-price__label opacity8">Level</div>
                      <div className="course-price__level u-marginTop6 font24 fontMedium">
                        {course.course_level}
                      </div>
                    </div>
                    <div className="course-price__wrapper">
                      <div className="course-price__label opacity8">
                        Estimasi Belajar
                      </div>
                      <div className="course-price__level u-marginTop6 font24 fontMedium">
                        {course.duration} Menit
                      </div>
                    </div>
                    <div className="separator "></div>
                    <div className="course-price__number text-center">
                      <div className="course-price__number-label opacity8">
                        Harga
                      </div>
                      <div className="course-price__number-detail font32 fontMedium">
                        {`Rp ${course.course_price}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }

  render() {
    let { course } = this.props
    return <DetailCourseStyle>{this.getContent(course)}</DetailCourseStyle>
  }
}

export default withRouter(DetailCourseComp)
