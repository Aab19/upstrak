import {
  LOGIN,
  REGISTER,
  LOGOUT,
  VALIDATION,
  CHANGE_FIRST_USE
} from "./actions"
import { receiveData } from "../modules/handleData"
import toast from "../../client/modules/toast"

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      if (action.json) {
        if (action.json.status === 200) {
          toast(true, action.json.message)
          setTimeout(() => {
            window.location.href = "/beranda"
          }, 1500)
        } else {
          toast(true, action.json.message)
        }
      }
      return receiveData(state, action)
    case REGISTER:
      if (action.json) {
        if (action.json.status === 200) {
          toast(true, action.json.message)
          setTimeout(() => {
            window.location.href = "/beranda"
          }, 1500)
        } else {
          if (action.options && action.options.reload) {
            window.location.href = "/daftar"
          } else {
            toast(true, action.json.message)
          }
        }
      }
      return receiveData(state, action)
    case LOGOUT:
      if (action.json) {
        if (action.json.status === 200) {
          window.location.href = "/"
        } else {
          toast(true, action.json.message)
        }
      }
      return receiveData(state, action)
    case CHANGE_FIRST_USE:
      if (action.json && action.json.status === 200) {
        return Object.assign({}, state, action.json.data)
      }
      return receiveData(state, action)
    case VALIDATION:
      return receiveData(state, action)
    default:
      return state
  }
}
