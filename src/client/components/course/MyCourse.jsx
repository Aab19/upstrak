import React, { Component } from "react"
import PropTypes from "prop-types"
import { MyCourseStyle } from "./style"
import Card from "../card/index"
import MyCourseCardShimmer from "../home/components/HomeCardShimmer"

class MyCourseComp extends Component {
  static propTypes = {
    course: PropTypes.object
  }

  getContent = () => {
    if (
      !this.props.course ||
      (this.props.course && this.props.course.in_progress)
    ) {
      return <MyCourseCardShimmer myCourse />
    } else {
      return this.props.course.result.map((val, key) => {
        return (
          <div className="col-md-4" key={key}>
            <Card course={val} myCourse />
          </div>
        )
      })
    }
  }

  render() {
    return (
      <MyCourseStyle>
        <div className="mycourse__head">
          <h2 className="title font32 fontSemi">Kursus ku</h2>
          <div className="description u-marginTop8 opacity8">
            4 Kursus tersedia untuk kamu pelajari
          </div>
        </div>
        <div className="row u-marginTop32">{this.getContent()}</div>
      </MyCourseStyle>
    )
  }
}

export default MyCourseComp
