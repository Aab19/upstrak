import Auth from "../store/auth/reducer"
import Course from "../store/course/reducer"

import createLogger from "redux-logger"
import thunkMiddleware from "redux-thunk"
import apiMiddleware from "../store/middlewares/api"
import { createStore, applyMiddleware, combineReducers } from "redux"

export let Middlewares

// if production or load by server
if (process.env.NODE_ENV == "production" || typeof window == "undefined") {
  Middlewares = applyMiddleware(apiMiddleware, thunkMiddleware)
} else {
  Middlewares = applyMiddleware(apiMiddleware, createLogger, thunkMiddleware)
}

const preloadedState = typeof window != "undefined" ? window.__data__ : {}

// combine reducers here
export const Reducers = combineReducers({
  Auth,
  Course
})

export default createStore(Reducers, preloadedState, Middlewares)
