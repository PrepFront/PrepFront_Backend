import { Router } from "express";
import CONSTANTS from "../utils/app-constants.js";
import expertController from "../controllers/expert.js";

const ExpertRouter = Router()

ExpertRouter.get(CONSTANTS.ROUTES.EXPERTS.GET_EXPERTS,expertController.getExperts)

export default ExpertRouter