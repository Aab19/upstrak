import request from "request"
import { objToQuery } from "string-manager"
import fs from "fs"
import httpException from "../../../config/httpException"
import debug from "debug"

const debugServer = debug("app:server")

/**
 * function to get data from API
 * @params (string) method, (string) endpoint, (object) params
 */
export default function requestAPI(
  method = "GET",
  uri = "",
  params = {},
  req = {}
) {
  return new Promise((resolve, reject) => {
    //set query
    if (params.query) {
      endpoint = `${endpoint}?${objToQuery(params.query)}`
      delete params.query
    }

    //set options
    var options = {
      method,
      uri,
      timeout: 30000,
      headers: {
        "User-Agent": "Upstrak/0.1",
        "Content-Type":"application/x-www-form-urlencoded",
        Auth: "",
        Authorization: ""
      }
    }

    if (req.session && req.session.token) {
      options.headers.Auth = req.session.token
      options.headers.Authorization = `Bearer ${req.session.token}`
    }

    // using POST method
    if (["post", "put"].includes(method.toLowerCase())) {
      options.form = params

      // upload files from input file
      // if (options.formData.files) {
      //   const { files } = options.formData
      //   delete options.formData.files

      //   Object.keys(files).map(n => {
      //     options.formData[n] = {
      //       value: fs.createReadStream(files[n]._writeStream.path),
      //       options: {
      //         filename: files[n].name,
      //         type: files[n].type
      //       }
      //     }
      //   })
      // }
    }

    //start request
    try {
      debugServer("Options :", options)
      request(options, (error, response, body) => {
        if (error) {
          return resolve(httpException(500))
        } //success
        else {
          try {
            let payload = JSON.parse(body)
            if (payload.constructor === Array) {
              //response as array []
              let nextpayload = {}
              nextpayload.result = payload
              payload = {}
              payload = nextpayload
            }
            if (!payload.status) payload.status = response.statusCode //added status in response
            return resolve(payload)
          } catch (e) {
            debugServer("error server api request :", e)
            return resolve(httpException(500))
          }
        }
      })
    } catch (err) {
      return resolve(httpException(500, err.message + ", " + err.stack))
    }
  })
}
