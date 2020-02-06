import React, { Component } from "react"
import { connect } from "react-redux"
import Helmet from "../../components/Helmet"
import Nav from "../../components/navigation/index"
import Footer from "../../components/footer"

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet title="Profil" />
        <div id="main" role="main" className="main container">
          <Nav name={this.props.auth.username} />
          <h1>Profil</h1>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.Auth }
}

export default connect(mapStateToProps)(Profile)
