import { ExpertModel } from "../models/experts.js";

function getExperts(config={}){
    return ExpertModel.find(config)
}

export {
    getExperts
}