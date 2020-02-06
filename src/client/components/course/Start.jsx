import React, { Component } from "react"
import { CourseStartStyle } from "./style"
import SidebarCourseStart from "../sidebar/CourseStart"
import Plyr from "plyr"
import Tabs from "../tabs/index"
import Button from "../buttons/Button"
import PageLoading from "../loaders/PageLoading"

class CourseStartComp extends Component {
  componentDidMount() {
    setTimeout(() => {
      const player = new Plyr("#player", {
        controls: ["play", "progress", "current-time", "fullscreen"],
        // loadSprite: false,
        hideControls: false
      })
    }, 500)
  }

  getContent = () => {
    if (
      !this.props.course ||
      (this.props.course && this.props.course.in_progress)
    ) {
      return <PageLoading />
    } else {
      let course = this.props.course
      return (
        <div className="course-container">
          <img src="/assets/img/bubble.svg" alt="" className="course-bubble" />
          <div className="row justify-content-center">
            <div className="course-title font24 fontSemi col-9">
              Membuat Footage Simple
            </div>
            <div className="course-content__video u-marginTop24 col-9">
              <div className="course-content__wrapper">
                <div className="plyr__video-embed" id="player">
                  <iframe
                    className="course-content__frame"
                    width="100%"
                    height="auto"
                    src="https://www.youtube.com/embed/ppXQMsj6Yfo"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>

            <div className="course-tab u-marginTop32 col-9">
              <Tabs>
                Deskripsi kursus
                <React.Fragment>
                  <div className="course-content__desc">
                    <p>{course.course_description}</p>
                  </div>
                </React.Fragment>
                File Pendukung
                <React.Fragment>
                  <a href={course.course_file}>
                    <Button
                      text="Pendukung.zip"
                      buttonType="transparentPink"
                      customClass="btn-file"
                      imageIcon="ic-file.svg">
                      Pendukung.zip
                    </Button>
                  </a>
                </React.Fragment>
              </Tabs>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    let sidebar = this.props.course ? this.props.course.section : null
    return (
      <React.Fragment>
        <SidebarCourseStart data={sidebar} />
        <CourseStartStyle>{this.getContent()}</CourseStartStyle>
      </React.Fragment>
    )
  }
}

export default CourseStartComp
