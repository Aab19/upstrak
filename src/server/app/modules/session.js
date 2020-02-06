import debug from "debug"

const debugServer = debug("app:server")

/**
 * function to save session by key and value
 * @param {object} req , req from express handler
 * @param {string} key , key of session
 * @param {*} data , session data
 */
export function save(req, key, data) {
  debugServer(`store session ${key} :`, data)
  req.session[key] = data
  
}

/**
 * function to save session by key
 * @param {*} req 
 * @param {Strinf} key, key of session will destroy 
 */
export function destroy(req, key) {
  debugServer(`destroy session ${key}`)
  req.session[key] = null
}
