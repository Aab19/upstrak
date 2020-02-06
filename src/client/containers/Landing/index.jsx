import React, { Component } from "react"

import Helmet from "../../components/Helmet"
import LandingComp from "../../components/Landing/index"
import Footer from "../../components/footer"

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet title="Landing" />
        <LandingComp />
        <Footer className="margin0" />
      </React.Fragment>
    )
  }
}

export default Landing
