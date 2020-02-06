import React, { Component } from "react"
import PropTypes from "prop-types"
import AccordionStyle from "./style"

class Accordion extends Component {
  constructor(props) {
    super(props)
    this.content = React.createRef()

    this.state = {
      setActive: "",
      setHeight: "0px",
      setRotate: "accordion__icon"
    }
  }

  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    locked: PropTypes.bool
  }

  toggleAccordion = () => {
    if (this.state.setActive === "") {
      this.setState({ setActive: "active" })
    } else {
      this.setState({ setActive: "" })
    }

    if (this.state.setActive === "active") {
      this.setState({ setHeight: "0px", setRotate: "accordion__icon" })
    } else {
      this.setState({
        setHeight: `${this.content.current.scrollHeight}px`,
        setRotate: "accordion__icon rotate"
      })
    }
  }

  render() {
    return (
      <AccordionStyle id={this.props.id} className="accordion__section">
        <button
          className={`accordion ${this.state.setActive}`}
          onClick={() => this.toggleAccordion()}>
          <p className="accordion__title fontMedium opacity8 violet">
            {this.props.title}
          </p>
          <img
            className={`${this.state.setRotate}`}
            src="/assets/img/icons/ic-chevron.svg"
            alt=""
          />
        </button>
        <div
          ref={this.content}
          style={{ maxHeight: `${this.state.setHeight}` }}
          className="accordion__content">
          <div className="accordion accordion__item">
            {this.props.locked ? (
              <img
                src="/assets/img/icons/ic-lock.svg"
                alt=""
                className="accordion__item-lock"
              />
            ) : null}
            <div className="accordion__item-list u-marginLeft8">
              {this.props.content}
            </div>
          </div>
        </div>
      </AccordionStyle>
    )
  }
}

export default Accordion
