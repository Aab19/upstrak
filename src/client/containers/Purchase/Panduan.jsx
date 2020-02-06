import React, { Component } from "react"
import { connect } from "react-redux"
import Helmet from "../../components/Helmet"
import Nav from "../../components/navigation/index"
import PanduanPembayaranComp from "../../components/purchase/Panduan"
import Footer from "../../components/footer"

class PanduanPembayaran extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet title="Cara Pembayaran" />
        <div id="main" role="main" className="main container">
          <Nav name={this.props.auth.username} />
          <PanduanPembayaranComp />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default PanduanPembayaran
