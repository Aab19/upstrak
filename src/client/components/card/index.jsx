import React, { Component } from "react"
import { withRouter } from "react-router"
import PropTypes from "prop-types"
import CardStyle from "./style"

class Card extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired,
    className: PropTypes.string
  }

  render() {
    const { course } = this.props
    return (
      <CardStyle
        id={course.course_id}
        className={this.props.className ? this.props.className : ""}
        onClick={() => this.props.history.push(`/kursus/${course.encrypt_id}`)}>
        <div
          className="card-image"
          style={{
            background: `url(${course.image}) no-repeat center center`
          }}>
          <div className="overlay-card-image"></div>
        </div>
        <div className="card-category u-marginTop16 font14 opacity6">
          {course.category_name}
        </div>
        <div className="card-title u-marginTop8 fontM">{course.course_title}</div>
        {course.myCourse ? (
          <React.Fragment>
            <div className="card-progress-wrapper u-marginTop8">
              <div className="opacity8 fontSemi font14">{course.course_instructor}</div>
              <div className="card-progress d-flex">
                <progress
                  className="u-marginTop8"
                  max="100"
                  value="80"></progress>
                <div className="card-progress__number violet fontSemi font14">
                  80%
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="separator"></div>
            <div className="card-spec">
              <div className="card-spec__detail">
                <img
                  src="/assets/img/icons/book.svg"
                  alt="book"
                  className="icon"
                />
                <div className="title u-marginLeft8 opacity8">
                  {course.total_material} Materi
                </div>
              </div>
              <div className="card-spec__detail">
                <div className="title u-marginLeft8 opacity8">
                  {course.course_duration} Menit
                </div>
              </div>
            </div>
            <div className="separator bottom"></div>
            <div className="card-info">
              <div className="card-info__user">
                <img
                  className="card-info__user-avatar"
                  src={course.avatar_instructor}
                  alt="avatar"
                />
                <div className="card-info__user-fullname opacity8">
                  {course.course_instructor}
                </div>
              </div>
              <div className="card-info__rating">
                <img
                  src="/assets/img/icons/star.svg"
                  alt=""
                  className="card-info__rating-star"
                />
                <div className="card-info__rating-number u-marginLeft8 opacity8">
                  {course.rating}
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </CardStyle>
    )
  }
}

export default withRouter(Card)
