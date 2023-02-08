import { DCSModel } from "../models/dcs.js"

function getMeetings(){
    return DCSModel.find({}).populate('expert')
}

export {
    getMeetings
}