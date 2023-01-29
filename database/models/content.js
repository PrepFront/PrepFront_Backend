import ServiceSchema from "../schemas/service.js";
import { model } from "mongoose";

const ContentModel = model('technical', ServiceSchema)

export { ContentModel };