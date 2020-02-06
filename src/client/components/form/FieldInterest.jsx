import React, { Component } from "react"
import { FieldInterestStyle } from "./style"
import Dropdown from "../../modules/dropdown"
import DropdownContainer from "../dropdown/index"
import ListInterest from "../list/ListInterest"

class FieldInterest extends Component {
  state = {
    selectedList: "Pilih Minat",
    selectedListOptional: "Pilih Minat (opsional)"
  }

  componentDidMount() {
    Dropdown()
  }

  chooseInterest = data => {
    this.setState({ selectedList: data })
  }

  chooseSecondInterest = data => {
    this.setState({ selectedListOptional: data })
  }

  render() {
    return (
      <FieldInterestStyle
        className={`field-wrapper ${
          this.props.className ? this.props.className : ""
        }`}>
        <div className="field-input">
          <span
            className={`${
              this.state.selectedList !== "Pilih Minat" ? "active" : ""
            }`}>
            {this.state.selectedList}
          </span>
          <DropdownContainer>
            <div className="dropdown dropdown--mobile">
              <a href="javascript:;" className="dropdown__toggle dropbtn" />
              <div className="dropdown__menu dropdown-content">
                <ListInterest chooseInterest={this.chooseInterest} />
              </div>
            </div>
          </DropdownContainer>
        </div>
        <div className="field-input">
          <span
            className={`${
              this.state.selectedListOptional !== "Pilih Minat (opsional)"
                ? "active"
                : ""
            }`}>
            {this.state.selectedListOptional}
          </span>
          <DropdownContainer>
            <div className="dropdown dropdown--mobile">
              <a href="javascript:;" className="dropdown__toggle dropbtn" />
              <div className="dropdown__menu dropdown-content">
                <ListInterest
                  chooseSecondInterest={this.chooseSecondInterest}
                />
              </div>
            </div>
          </DropdownContainer>
        </div>
      </FieldInterestStyle>
    )
  }
}

export default FieldInterest
