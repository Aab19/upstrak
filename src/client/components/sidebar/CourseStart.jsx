import React, { Component } from "react"
import { withRouter } from "react-router"
import { SidebarCourseStartStyle } from "./style"
import NavBack from "../navigation/NavBack"
import { Link } from "react-router-dom"

class SidebarCourseStart extends Component {
  getContent = () => {
    let data = this.props.data ? this.props.data : null
    let active = this.props.match.params.order
    if (data) {
      return data.map((val, key) => {
        return (
          <div className="sidebar-wrapper__list" key={key}>
            <div className="sidebar__list-header white fontSemi font18">
              {val.material_header}
            </div>
            <ul className="sidebar__list u-marginTop16">
              {val.materials.map((list, key) => {
                return (
                  <li
                    className={`sidebar__list-item ${
                      active == list.order ? "active" : ""
                    }`}
                    key={key}>
                    <a
                      href="javascript:;"
                      className="white opacity8 fontSemi"
                      to="/beranda">
                      {list.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <SidebarCourseStartStyle>
        <NavBack
          action={() =>
            this.props.history.push(
              `/kursus/${this.props.match.params.encrypt}`
            )
          }
          title="Kembali"
          white
        />
        <div className="sidebar-container">{this.getContent()}</div>
      </SidebarCourseStartStyle>
    )
  }
}

export default withRouter(SidebarCourseStart)
