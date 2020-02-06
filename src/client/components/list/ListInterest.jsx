import React, { Component } from "react"
import { ListInterestStyle } from "./style"

class ListInterest extends Component {
  setInterest = val => {
    this.props.chooseInterest(val)
  }

  setSecondInterest = val => {
    this.props.chooseSecondInterest(val)
  }

  getList = () => {
    return (
      <React.Fragment>
        <li onClick={() => this.setInterest("Desain")}>
          <a href="javascript:;">Desain</a>
        </li>
        <li onClick={() => this.setSecondInterest("Pemrograman")}>
          <a href="javascript:;">Pemrograman</a>
        </li>
        <li>
          <a href="javascript:;">Grafis</a>
        </li>
        <li>
          <a href="javascript:;">Music</a>
        </li>
        <li>
          <a href="javascript:;">Nyanyi</a>
        </li>
      </React.Fragment>
    )
  }

  render() {
    return <ListInterestStyle>{this.getList()}</ListInterestStyle>
  }
}

export default ListInterest
