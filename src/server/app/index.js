#!/usr/bin/env node

import express from "express"
import path from "path"
import api from "./api"
import render from "./render"
import session from "cookie-session"
import cookieParser from "cookie-parser"
import AuthMiddleware, {
  notFound,
  authRequired,
  PublicMiddleware,
  handleDetail
} from "./middlewares/auth"

const app = express()
let staticOptions = {}

if (process.env.NODE_ENV == "production") {
  staticOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 30, //default cache max age is 1 month
    eTag: false
  }
}

app.disabled("x-powered-by")

// session middleware
app.use(cookieParser())
app.use(
  session({
    name: "upstrak-web-front",
    keys: [process.env.APP_KEY || "upstrak-web", "upstrak.com"],
    maxAge: 1000 * 60 * 60 * 24 * 30 //1 month
  })
)

// // global midleware
// app.use((req, res, next) => {
//   // log
//   const debugReq = require("debug")("app:req")
//   debugReq(
//     `${req.method} ${req.originalUrl} at ${new Date()
//       .toISOString()
//       .replace(/T/, " ")
//       .replace(/\..+/, "")}`
//   )
//   next()
// })

// routes
app.use("/api", api)
app.use(
  "/firebase-messaging-sw.js",
  express.static(
    path.resolve(`${__dirname}/../../../firebase-messaging-sw.js`)
  ),
  notFound
)
app.use(
  "/service-worker.js",
  express.static(
    path.resolve(`${__dirname}/../../../sw.js`)
  ),
  notFound
)
app.use(
  "/manifest.json",
  express.static(path.resolve(`${__dirname}/../../../manifest.json`)),
  notFound
)
app.use(
  "/assets",
  express.static(path.resolve(__dirname + "/../../../assets"), staticOptions),
  notFound
)
app.use("/masuk", PublicMiddleware)
app.use("/daftar", PublicMiddleware)
app.use("/", AuthMiddleware, render)

export default app
