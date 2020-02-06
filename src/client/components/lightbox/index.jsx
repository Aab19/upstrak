import React, { Component } from "react"
import Lightbox from "react-image-lightbox"
import PropTypes from "prop-types"

if (typeof window !== "undefined") {
  require("react-image-lightbox/style.css")
}

class ImageLightbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex: props.position ? props.position : 0
    }
  }

  static propTypes = {
    images: PropTypes.array.isRequired,
    togglePopup: PropTypes.func.isRequired
  }

  static defaultProps = {
    images: []
  }
  render() {
    const { photoIndex } = this.state
    return (
      <Lightbox
        mainSrc={this.props.images[photoIndex]}
        nextSrc={this.props.images[(photoIndex + 1) % this.props.images.length]}
        prevSrc={
          this.props.images[
            (photoIndex + this.props.images.length - 1) %
              this.props.images.length
          ]
        }
        onCloseRequest={() => this.props.togglePopup()}
        onMovePrevRequest={() =>
          this.setState({
            photoIndex:
              (photoIndex + this.props.images.length - 1) %
              this.props.images.length
          })
        }
        onMoveNextRequest={() =>
          this.setState({
            photoIndex: (photoIndex + 1) % this.props.images.length
          })
        }
      />
    )
  }
}

export default ImageLightbox
