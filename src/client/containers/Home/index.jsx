import React, { Component } from "react"
import { connect } from "react-redux"
import { getCourseHome } from "../../../store/course/actions"

import Helmet from "../../components/Helmet"
import Nav from "../../components/navigation/index"
import HomeComp from "../../components/home/index"
import Footer from "../../components/footer"

class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      if (!this.props.course["course-home"]) {
        this.props.dispatch(getCourseHome())
      }
    }, 1000)
  }

  render() {
    return (
      <React.Fragment>
        <Helmet title="Beranda" />
        <div id="main" role="main" className="main container">
          <Nav name={this.props.auth.username} />
          <HomeComp
            auth={this.props.auth}
            course={this.props.course["course-home"]}
          />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.Auth, course: state.Course }
}

export default connect(mapStateToProps)(Home)
