import { Router } from "express";
import userController from "../controllers/user.js";
import constants from "../utils/app-constants.js";
import { authoriseUser } from "../middlewares/user-middleware.js";
const userRoute = Router()

userRoute.post(constants.ROUTES.USER.SIGNUP,userController.add)
userRoute.post(constants.ROUTES.USER.LOGIN,userController.login)
userRoute.get(constants.ROUTES.USER.TOKEN,userController.generateAccessFromRefresh)
userRoute.get(constants.ROUTES.USER.ACCOUNT_DETAILS,authoriseUser,userController.getUserDetails)

export default userRoute




