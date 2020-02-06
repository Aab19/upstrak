import * as session from "../modules/session"
var exceptionUrl = ["/masuk", "/daftar", "/account/forgot-password"]
export function notFound(req, res) {
  res.status(404).end()
}


/**
 * function to handle redirect
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export default function(req, res, next) {
  var auth = req.session.auth
  if (!exceptionUrl.includes(req.path)) {
    session.save(req, "last_url", req.path)
  } else {
    session.save(req, "last_url", "/")
  }
  next()
}


/**
 * function to handle auth required page
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function authRequired(req, res, next) {
  var auth = req.session.auth
  if (!auth) {
    res.redirect("/masuk")
  }
  next()
}

/**
 * function to handle auth publict page
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function PublicMiddleware(req, res, next) {
  var auth = req.session.auth
  if (auth) {
    res.redirect("/beranda")
  }
  next()
}
