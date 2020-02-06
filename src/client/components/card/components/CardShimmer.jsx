import React from "react"
import PropTypes from "prop-types"
import { CardShimmerStyle } from "../style"

const CardShimmer = props => {
  return (
    <CardShimmerStyle>
      <div className="card-image shimmer"></div>
      <div className="card-category u-marginTop16 shimmer"></div>
      <div className="card-title u-marginTop8 shimmer"></div>
      {props.myCourse ? (
        <div className="card-progress shimmer"></div>
      ) : (
        <React.Fragment>
          <div className="separator"></div>
          <div className="card-spec d-flex justify-content-between">
            <div className="card-spec__detail">
              <div className="title shimmer"></div>
            </div>
            <div className="card-spec__detail">
              <div className="title-second shimmer"></div>
            </div>
          </div>
          <div className="separator bottom"></div>
          <div className="card-info d-flex justify-content-between">
            <div className="card-info__user">
              <div className="card-info__user-fullname shimmer"></div>
            </div>
            <div className="card-info__rating">
              <div className="card-info__rating-number u-marginLeft8 shimmer"></div>
            </div>
          </div>
        </React.Fragment>
      )}
    </CardShimmerStyle>
  )
}

CardShimmer.propTypes = {
  myCourse: PropTypes.bool
}

export default CardShimmer
