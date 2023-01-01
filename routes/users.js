import { Router } from "express";
import userController from "../controllers/user.js";
import constants from "../utils/app-constants.js";
import { authoriseUser } from "../middlewares/user-middleware.js";
const userRoute = Router()

/**
 * @swagger
 * /user/signup: 
 *  post:
 *      description: Creating a new user into system.
 *      responses:
 *          201:
 *              description: Returns details of new user
 *          500:
 *              description: Returns problem is at system's side
 *          400:
 *              description: Returns when user is already registered
 */
userRoute.post(constants.ROUTES.USER.SIGNUP,userController.add)


/**
 * @swagger
 * /user/login: 
 *  post:
 *      description: Loging in user into system.
 *      responses:
 *          200:
 *              description: Returns access token and refresh token
 *          400:
 *              description: Returns when password or email enterd is incorrect
 *          401:
 *              description: Returns when user is not registered
 */
userRoute.post(constants.ROUTES.USER.LOGIN,userController.login)


/**
 * @swagger
 * /user/token: 
 *  get:
 *      description: Generating access token from refresh token.
 *      responses:
 *          200:
 *              description: Returns access token and refresh token
 *          401:
 *              description: Returns when token signature is invalid
 */
userRoute.get(constants.ROUTES.USER.TOKEN,userController.generateAccessFromRefresh)

/**
 * @swagger
 * /user/me: 
 *  get:
 *      description: Creating a new user into system.
 *      responses:
 *          200:
 *              description: Returns details of user
 *          401:
 *              description: Returns when user is not authenticated or token is expired
 */
userRoute.get(constants.ROUTES.USER.ACCOUNT_DETAILS,authoriseUser,userController.getUserDetails)

export default userRoute




