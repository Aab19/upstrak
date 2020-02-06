import request from "../modules/api"
import formidable from "formidable"
import config from "../../../config/host"
const { API_HOST } = config[process.env.APP_ENV]

/**
 * handle to request from internal
 * @param {*} req
 * @param {*} res
 * @param {*} endpoint
 */
export function internalRequest(req, res, config = {}, callback) {
  req.reqdata = {
    method: req.method,
    endpoint: config.endpoint,
    params: req.params
  }

  if (req.fields) {
    req.reqdata.params = Object.assign({}, req.params, req.fields)
  }

  if (req.fields) {
    req.reqdata.params = Object.assign({}, req.params, req.fields)
  }

  if (req.files) {
    req.reqdata.params.files = req.files
  }

  const debugApiReq = require("debug")("app:api-req")
  //const debugApiRes = require('debug')('app:api-res')
  var { method, endpoint, params } = req.reqdata
  endpoint = API_HOST + endpoint
  // log
  debugApiReq(
    `${method} ${endpoint} at ${new Date()
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "")}`
  )
  return request(method, endpoint, params, req).then(response => {
    // logurl
    //debugApiRes(`${method} ${endpoint} ${response} at ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}`)
    callback(response)
  })
}

// generate request data
export function dirrectRequest(req, res, next) {
  let endpoint = req.originalUrl.replace("/api", "")
  req.reqdata = {
    method: req.method,
    endpoint,
    params: req.params
  }

  // parse formdata
  if (req.method != "GET") {
    // POST, PUT, DELETE, ...
    const form = new formidable.IncomingForm()
    form.parse(req, (err, params, files) => {
      params.files = files
      req.reqdata.params = Object.assign({}, req.params, params)
      next()
    })
  } else {
    next()
  }
}

// api caller
export function apiCaller(req, res) {
  const debugApiReq = require("debug")("app:api-req")
  const debugApiRes = require("debug")("app:api-res")
  const { method, endpoint, params } = req.reqdata
  return request(method, API_HOST + endpoint, params, req).then(response => {
    // log
    debugApiRes(
      `${method} ${endpoint} ${response} at ${new Date()
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, "")}`
    )
    res.json(responseTransform(req.path, response))
  })
}

/**
 * handle transformer return api
 * @param {*} path
 * @param {*} response
 */
function responseTransform(path, response) {
  switch (path) {
    default:
      response = response
  }
  return response
}
