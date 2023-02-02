import ServiceSchema from "../schemas/service.js";
import { model } from "mongoose";

const ContentModel = model('technicals', ServiceSchema)

export { ContentModel };