import { model } from "mongoose";
import DCSSchema from "../schemas/dcs.js";

const DCSModel = new model('dcs', DCSSchema)

export { DCSModel }