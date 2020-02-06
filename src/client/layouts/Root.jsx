import React, { Component } from "react"
import { connect } from "react-redux"
import { renderRoutes } from "react-router-config"
import { closeModal, openModal } from "../modules/modal"
import Modal from "../components/modal/index"
import { changeFirstUse } from "../../store/auth/actions"
import PopupWelcome from "../components/modal/PopupWelcome"

const defaultOptions = {
  noOutClose: false,
  style: {},
  contentStyle: {}
}

class Root extends Component {
  constructor(props) {
    super(props)
    this.handleModalContent = this.handleModalContent.bind(this)
    this.hideModalContent = this.hideModalContent.bind(this)
    this.state = {
      modalContent: null,
      defaultOptions: defaultOptions
    }
  }

  componentDidMount() {
    window.showModalContent = this.handleModalContent
    window.hideModalContent = this.hideModalContent

    if (this.props.auth.first_use === 1) {
      this.popupWelcome()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.hideModalContent()
    }
  }

  handleModalContent(modalContent, options = defaultOptions) {
    document.body.style.overflow = "hidden"
    this.setState({ modalContent, options })
  }

  hideModalContent() {
    if (this.state.modalContent) {
      this.setState({ modalContent: null })
    }
  }

  popupWelcome = () => {
    this.setState({ defaultOptions: (defaultOptions.noOutClose = true) })
    window.showModalContent(props => {
      return (
        <PopupWelcome
          {...props}
          auth={this.props.auth}
          setFirst={this.setFirst}
          resetNoOutClose={this.resetNoOutClose}
        />
      )
    })
  }

  setFirst = () => {
    if (this.props.auth.id) {
      this.props.dispatch(
        changeFirstUse({
          filter: "change",
          form: { id: this.props.auth.id, value: 0 }
        })
      )
    }
  }

  resetNoOutClose = () => {
    this.setState({ defaultOptions: !defaultOptions.noOutClose })
  }

  closeAlert() {
    var alert = document.getElementById("alert")
    alert.remove()
    delete window.confirmModal
  }

  render() {
    return (
      <React.Fragment>
        {renderRoutes(this.props.route.routes)}
        {/* global modal */}
        {this.state.modalContent ? (
          <Modal {...this.state.options}>
            <this.state.modalContent
              closeModal={() => closeModal("global-modal")}
              openModal={() => openModal("global-modal")}
            />
          </Modal>
        ) : null}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.Auth }
}

export default connect(mapStateToProps)(Root)
