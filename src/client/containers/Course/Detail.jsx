import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { getContentCourse } from "../../../store/course/actions"
import Helmet from "../../components/Helmet"
import Nav from "../../components/navigation/index"
import DetailCourseComp from "../../components/course/Detail"
import Footer from "../../components/footer"

class DetailCourse extends Component {
  componentDidMount() {
    if (!this.props.course[`detail-course__${this.props.match.params.id}`]) {
      setTimeout(() => {
        this.props.dispatch(
          getContentCourse({
            course_id: this.props.match.params.encrypt
          })
        )
      }, 1000)
    }
  }

  render() {
    return (
      <React.Fragment>
        <Helmet title="Detail Kursus" />
        <div id="main" role="main" className="main container">
          <Nav name={this.props.auth.username} />
        </div>
        <DetailCourseComp
          course={
            this.props.course[
              `detail-course__${this.props.match.params.encrypt}`
            ]
          }
        />
        <Footer />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.Auth, course: state.Course }
}

export default connect(mapStateToProps)(withRouter(DetailCourse))
