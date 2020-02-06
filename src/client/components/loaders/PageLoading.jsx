import React, { Component } from "react"
import { PageLoadingStyle } from "./style"

class PageLoading extends Component {
  render() {
    return (
      <PageLoadingStyle>
        <img src="/assets/img/upstrak-load.gif" alt="" />
      </PageLoadingStyle>
    )
  }
}

export default PageLoading
