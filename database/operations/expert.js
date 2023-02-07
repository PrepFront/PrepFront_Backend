import { ExpertModel } from "../models/experts.js";

function getExperts(){
    return ExpertModel.find()
}

export {
    getExperts
}