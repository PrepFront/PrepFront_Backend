import ExpertSchema from "../schemas/experts.js";
import { model } from "mongoose";

const ExpertModel = new model('expert',ExpertSchema)

export { ExpertModel }