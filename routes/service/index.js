import { Router } from "express";
import constants from "../../utils/app-constants.js";
import service1Controller from "../../controllers/service-1.js";
import service2Controller from "../../controllers/service-2.js";
import service3Controller from "../../controllers/service-3.js";
import service5Controller from "../../controllers/service-5.js";
import councellingRoute from "./councelling.js";

const serviceRoute = Router()

/**
 * @swagger
 * /service/init-step: 
 *  get:
 *      description: Endpoints for getting started with studies and for what to study
 *      responses:
 *          200:
 *              description: Return what goes to that endpoint for now
 */
serviceRoute.get(constants.ROUTES.SERVICES.SERVICE_1,service1Controller.getDetails)

/**
 * @swagger
 * /service/tech-skills: 
 *  get:
 *      description: Endpoints for tech resources
 *      responses:
 *          200:
 *              description: Return what goes to that endpoint for now
 */
serviceRoute.get(constants.ROUTES.SERVICES.SERVICE_2,service2Controller.getDetails)

/**
 * @swagger
 * /service/non-tech-skills: 
 *  get:
 *      description: Endpoints for non-tech resources
 *      responses:
 *          200:
 *              description: Return what goes to that endpoint for now
 */
serviceRoute.get(constants.ROUTES.SERVICES.SERVICE_3,service3Controller.getDetails)

/**
 * @swagger
 * /service/councelling: 
 *  get:
 *      description: Endpoints for booking councelling
 *      responses:
 *          200:
 *              description: Return what goes to that endpoint for now
 */
serviceRoute.post(constants.ROUTES.SERVICES.SERVICE_4,councellingRoute)

/**
 * @swagger
 * /service/dcs: 
 *  get:
 *      description: Endpoints for dcs
 *      responses:
 *          200:
 *              description: Return what goes to that endpoint for now
 */
serviceRoute.get(constants.ROUTES.SERVICES.SERVICE_5,service5Controller.getMeetings)

export default serviceRoute