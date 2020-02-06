import React, { Component } from "react"
import PropTypes from "prop-types"
import { TabsWrapper } from "./style"

class Tabs extends Component {
  constructor(props) {
    super()
    this.state = {
      active: 0
    }
  }

  static propTypes = {
    className: PropTypes.string
  }

  select = i => {
    let _this = this
    return function() {
      _this.setState({
        active: i
      })
    }
  }

  renderTabs = () => {
    return React.Children.map(this.props.children, (item, i) => {
      if (i % 2 === 0) {
        let active = this.state.active === i ? "active" : ""
        return (
          <a onClick={this.select(i)} className={`${active} tab`}>
            {item}
          </a>
        )
      }
    })
  }

  renderContent() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i - 1 === this.state.active) {
        return <div className="tab-content">{item}</div>
      } else {
        return
      }
    })
  }

  render() {
    return (
      <TabsWrapper className={this.props.className ? this.props.className : ""}>
        <div className="tab-pills">{this.renderTabs()}</div>
        {this.renderContent()}
      </TabsWrapper>
    )
  }
}

export default Tabs
