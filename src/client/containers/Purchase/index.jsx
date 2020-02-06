import React, { Component } from "react"
import { connect } from "react-redux"
import Helmet from "../../components/Helmet"
import Nav from "../../components/navigation/index"
import PurchaseComp from "../../components/purchase/index"
import Footer from "../../components/footer"

class Purchase extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet title="Pembelian" />
        <div id="main" role="main" className="main container">
          <Nav name={this.props.auth.username} />
          <PurchaseComp />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.Auth }
}

export default connect(mapStateToProps)(Purchase)
