import React from "react"
import PropTypes from "prop-types"
import CardShimmer from "../../card/components/CardShimmer"

const HomeCardShimmer = props => {
  return (
    <React.Fragment>
      <div className="col-md-4">
        <CardShimmer myCourse={props.myCourse} />
      </div>
      <div className="col-md-4">
        <CardShimmer myCourse={props.myCourse} />
      </div>
      <div className="col-md-4">
        <CardShimmer myCourse={props.myCourse} />
      </div>
      <div className="col-md-4">
        <CardShimmer myCourse={props.myCourse} />
      </div>
      <div className="col-md-4">
        <CardShimmer myCourse={props.myCourse} />
      </div>
      <div className="col-md-4">
        <CardShimmer myCourse={props.myCourse} />
      </div>
    </React.Fragment>
  )
}

HomeCardShimmer.propTypes = {
  myCourse: PropTypes.bool
}

export default HomeCardShimmer
