import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { getCourseStart } from "../../../store/course/actions"
import Helmet from "../../components/Helmet"
import CourseStartComp from "../../components/course/Start"

class CourseStart extends Component {
  componentDidMount() {
    if (!this.props.course[`course-start__${this.props.match.params.id}`]) {
      this.props.dispatch(
        getCourseStart({
          course_id: this.props.match.params.encrypt
        })
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <Helmet title="Mulai Kursus" />
        <CourseStartComp
          course={
            this.props.course[
              `course-start__${this.props.match.params.encrypt}`
            ]
          }
        />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.Auth, course: state.Course }
}

export default connect(mapStateToProps)(withRouter(CourseStart))
