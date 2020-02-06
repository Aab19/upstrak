#!/usr/bin/env node
var express = require("express")
var router = express.Router()
import auth from "./routes/api/auth"

// midlewares
import { dirrectRequest, apiCaller } from "./middlewares/api"
import SealMiddleware from "./middlewares/seal"

// router to use internal
router.use("/auth", auth)
router.use("/", SealMiddleware, dirrectRequest, apiCaller)

export default router
