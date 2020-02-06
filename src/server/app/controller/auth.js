import { internalRequest } from "../middlewares/api"
import * as session from "../modules/session"
import firebase from "../../../client/modules/firebase"
import userTransform from "../transformers/user"

class AuthController {
  /**
   * @description function to login
   * @param {string} req.fields.password
   * @param {string} req.fields.username
   */
  login(req, res) {
    internalRequest(req, res, { endpoint: "/auth/login" }, response => {
      if (!response.error) {
        session.destroy(req, "global")
        var user = response
        session.save(req, "auth", userTransform(user))
        session.save(req, "token", response.token)
      }
      response.last_url = req.session.last_url
      res.json(response)
    })
  }

  /**
   * @description function to register
   * @param {string} req.fields.password
   * @param {string} req.fields.username
   * @param {string} req.fields.email
   */
  register(req, res) {
    var endpoint = "/auth/register"
    internalRequest(req, res, { endpoint: endpoint }, response => {
      if (response.status === 200) {
        session.destroy(req, "global")
        var user = response
        session.save(req, "auth", userTransform(user))
        session.save(req, "token", response.token)
      }
      response.last_url = req.session.last_url
      res.json(response)
    })
  }

  /**
   * @description function to forgot password
   * @param {string} req.fields.email
   */
  forgotPassword(req, res) {
    internalRequest(
      req,
      res,
      { endpoint: "/user/forgot-password" },
      response => {
        res.json(response)
      }
    )
  }

  /**
   * @description function to google connect
   * @param {string} req.fields.token
   * @param {string} req.fields.username
   */
  googleConnect(req, res) {
    var credential = firebase.auth.GoogleAuthProvider.credential(
      req.fields.token
    )
    // Sign in with credential from the Google user.
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(function(result) {
        firebase
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then(function(idToken) {
            req.fields.token = idToken
            internalRequest(
              req,
              res,
              { endpoint: "/user/google-connect" },
              response => {
                if (response.status === 200) {
                  session.destroy(req, "global")
                  var user = userTransform(response.user)
                  session.save(req, "last_url", user.username)
                  session.save(req, "auth", user)
                  session.save(req, "token", response.user_token)
                } else {
                  var google_data = JSON.parse(req.fields.user)
                  google_data.token = credential.idToken
                  session.save(req, "global", google_data)
                }
                response.last_url = req.session.last_url
                res.json(response)
              }
            )
          })
          .catch(function(error) {
            // Handle error
          })
      })
      .catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
        res.json(error)
      })
  }

  /**
   * function to destroy session
   * @param {*} req
   * @param {*} res
   */
  logout(req, res) {
    session.destroy(req, "auth")
    session.destroy(req, "token")
    session.destroy(req, "global")
    session.destroy(req, "last_url")
    res.json({
      status: 200,
      message: "Berhasil keluar."
    })
  }

  /**
   * function to shange-first time
   * @param {*} req
   * @param {*} res
   */
  changeFirstime(req, res) {
    if (req.session.auth && req.session.auth.id) {
      var user = req.session.auth
      user.first_use = parseInt(req.fields.value)
      session.save(req, "auth", user)
      res.json({
        status: 200,
        data: user,
        message: "berhasil merubah status"
      })
    } else {
      res.json({})
    }
  }

  // /**
  //  * function to set new session
  //  * @param {*} req
  //  * @param {*} res
  //  */
  // changeUsername(req, res) {
  //   if (req.session.auth && req.session.auth.id) {
  //     var user = req.session.auth
  //     user.username = req.fields.value
  //     session.save(req, "auth", user)
  //     res.json({
  //       status: 200,
  //       data: user,
  //       message: "berhasil merubah username"
  //     })
  //   } else {
  //     res.json({})
  //   }
  // }
}

export default AuthController
