import { CALL_API } from "../middlewares/api"
import { objToQuery } from "string-manager"

export const LOGIN = "LOGIN"
export const REGISTER = "REGISTER"
export const LOGOUT = "LOGOUT"
export const VALIDATION = "VALIDATION"
export const CHANGE_FIRST_USE = "CHANGE_FIRST_USE"

// function to login
export function login(params = {}) {
  return {
    [CALL_API]: {
      type: LOGIN,
      filter: "login",
      params: params,
      options: params.options,
      method: "post",
      endpoint: `/api/auth/login`
    }
  }
}

// function to create new user
export function register(params) {
  return {
    [CALL_API]: {
      type: REGISTER,
      filter: "register",
      params: params.form,
      method: 'post',
      endpoint: "/api/auth/register"
    }
  }
}

// function to logout
export function logout(params = {}) {
  return {
    [CALL_API]: {
      type: LOGOUT,
      params,
      method: "post",
      endpoint: `/api/auth/logout`
    }
  }
}

export function validation(params = {}) {
  return {
    [CALL_API]: {
      type: VALIDATION,
      filter: params.filter,
      method: "get",
      endpoint: `/api/validation?${objToQuery(params.form)}`
    }
  }
}

export function changeFirstUse(params = {}) {
  return {
    [CALL_API]: {
      type: CHANGE_FIRST_USE,
      params: params.form,
      filter: params.filter,
      options: params.options,
      method: "put",
      endpoint: "/api/auth/set_first_use"
    }
  }
}
