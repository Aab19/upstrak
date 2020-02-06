import express from "express"
import auth from "../../controller/auth"

// middlewares
import handleForm from "../../middlewares/handleForm"

// controllers
const AuthController = new auth()

const router = express.Router()

router.post("/login", handleForm, AuthController.login)
router.post("/register", handleForm, AuthController.register)
// router.post("/google-connect", handleForm, AuthController.googleConnect)
router.post("/logout", handleForm, AuthController.logout)
router.post("/forgot-password", handleForm, AuthController.forgotPassword)
router.put("/set_first_use", handleForm, AuthController.changeFirstime)
// router.put("/set-username", handleForm, AuthController.changeUsername)

export default router
