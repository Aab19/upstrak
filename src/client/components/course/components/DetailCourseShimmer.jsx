import React from "react"
import { DetailCourseShimmerStyle } from "../style"
import PlayerShimmer from "../../player/components/PlayerShimmer"

const DetailCourseShimmer = props => {
  return (
    <DetailCourseShimmerStyle>
      <div className="course-header">
        <div className="container">
          <div className="row no-gutters justify-content-center">
            <div className="col-6 d-flex align-items-center flex-column">
              <div className="title shimmer-pink"></div>
              <div className="mentor u-marginTop24 shimmer-pink"></div>
              <div className="name u-marginTop60 shimmer-pink"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-content">
        <div className="container">
          <div className="row">
            <div className="col-7 offset-1">
              <PlayerShimmer />
            </div>
            <div className="col-3">
              <div className="course-content__spec">
                <div className="title shimmer-pink"></div>
                <div className="separator"></div>
                <div className="list-spec-1 shimmer-pink"></div>
                <div className="list-spec-2 u-marginTop40 shimmer-pink"></div>
                <div className="list-spec-3 u-marginTop40 shimmer-pink"></div>
                <div className="list-spec-4 u-marginTop40 shimmer-pink"></div>
                <div className="btn-shimmer shimmer-pink"></div>
              </div>
            </div>
            <div className="col-7 offset-1">
              <div className="row">
                <div className="col-12">
                  <div className="course-about u-marginTop60 shimmer-pink">
                  </div>
                    <div className="title u-marginTop24 shimmer-pink"></div>
                    <div className="desc u-marginTop16 shimmer-pink"></div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="course-price">
                <div className="course-price__level shimmer-pink"></div>
                <div className="course-price__level shimmer-pink"></div>
                <div className="separator"></div>
                <div className="course-price__tag shimmer-pink"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DetailCourseShimmerStyle>
  )
}

export default DetailCourseShimmer
