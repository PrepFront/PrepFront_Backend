import { Router } from "express";
import service4Controller from "../../controllers/service-4.js";
import { authoriseUser } from "../../middlewares/user-middleware.js";

const councellingRoute = Router()
councellingRoute.use(authoriseUser)

councellingRoute.post('/schedule',service4Controller.scheduleMeeting)

export default councellingRoute