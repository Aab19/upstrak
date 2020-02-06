import superagent from "superagent"
import httpException from "../../config/httpException"
import SealMiddleware from "seal-middleware"
import Config from "../../config/app"

const app_key = Config.app_key

// request api
export function request(method, endpoint, params) {
  method = method.toLowerCase()
  const formdata = !params || method === "get" ? {} : generateFormdata(params)
  const Seal = new SealMiddleware(app_key, 60000)
  return new Promise(resolve => {
    superagent[method](endpoint)
      .timeout(60000)
      .set("Accept", "application/json")
      .set("Content-key", Seal.generateSeal())
      .send(formdata)
      .on("error", err => {
        return resolve(httpException(500, err, true))
      })
      .end((err, res) => {
        if (err) {
          return resolve(httpException(500, err, true))
        } else {
          let response = JSON.parse(res.text)
          response.request_at = new Date().getTime()
          return resolve(response)
        }
      })
  })
}

// formdata generator
function generateFormdata(params) {
  let formdata = new FormData()
  // return params
  Object.keys(params).map(n => {
    formdata.append(n, params[n])
  })

  return formdata
}
