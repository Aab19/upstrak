import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoogleLogin from '../google-auth/google-login'
// import { googleConnect } from '../../../store/auth/action'
import Spinner from "../loaders/Spinner"

class BtnGoogle extends Component {
	constructor(props) {
		super(props)
		this.responseGoogle = this.responseGoogle.bind(this)
		this.responseGoogleFailure = this.responseGoogleFailure.bind(this)
		this.state = {
			token: '',
			onLogin: false,
			type: ''
		}
	}

	responseGoogle = (response) => {
		var google_data = {
			user: JSON.stringify(response.additionalUserInfo.profile),
			token: response.credential.idToken
		}

		this.setState(google_data)

		this.props.dispatch(
			googleConnect({
				form: google_data,
				options: {
					reload: true
				}
			})
		)
	}

	responseGoogleFailure(response) {}

	render() {
		var in_progress =
			(this.props.auth && this.props.auth['cek-email'] && this.props.auth['cek-email'].in_progress) ||
			this.state.onLogin
		return (
			<React.Fragment>
				<div>
					<GoogleLogin
						buttonText={this.props.title}
						onSuccess={this.responseGoogle}
						onFailure={this.responseGoogleFailure}
						className={`btn-google ${in_progress ? "is-disabled" : ""}`}
						isPopup={this.props.isPopup}
					/>
				</div>
				{this.props.auth['google_connect'] && this.props.auth['google_connect'].in_progress ? (
					<Spinner />
				) : null}
			</React.Fragment>
		)
	}
}

function mapStateToProps(state) {
	return {
		auth: state.Auth
	}
}

export default connect(mapStateToProps)(BtnGoogle)
