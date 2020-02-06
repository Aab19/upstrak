import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

const Authorization = WrappedComponent => {
  class WithAuthorization extends Component {
    render() {
      // get userdata session
      if (this.props.auth.id) {
        // user is logged in
        return <WrappedComponent {...this.props} />
      } else {
        // user not logged in
        if(typeof window !== 'undefined') {
          return <Redirect to='/' />
        } else {
          return <span>tidak login</span>
        }
      }
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.Auth
    }
  }

  return connect(mapStateToProps)(WithAuthorization)
}

export default Authorization
