import React, { Component } from "react"
import PropTypes from "prop-types"
import HomeStyle from "./style"
import Card from "../card/index"
import Button from "../buttons/Button"
import HomeCardShimmer from "./components/HomeCardShimmer"

class HomeComp extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    course: PropTypes.object
  }

  getContent = () => {
    if (
      !this.props.course ||
      (this.props.course && this.props.course.in_progress)
    ) {
      return <HomeCardShimmer />
    } else {
      return this.props.course.result.map((val, key) => {
        return (
          <div className="col-md-4" key={key}>
            <Card course={val} />
          </div>
        )
      })
    }
  }

  render() {
    return (
      <HomeStyle>
        <div className="home-welcome font24 fontSemi">
          {`Selamat datang, ${this.props.auth.username}`}
        </div>
        <div className="home-class__head">
          <h2 className="title">Daftar kursus</h2>
          <div className="description u-marginTop8">
            Pelajari keahlian yang kamu sukai
          </div>
        </div>
        <div className="row u-marginTop32">{this.getContent()}</div>

        <div className="home-loadmore">
          <Button
            text="Tampilkan lebih banyak..."
            buttonType="pink"
            buttonSize="full"
            customClass="btn-loadmore"
          />
        </div>
      </HomeStyle>
    )
  }
}

export default HomeComp
