import { DCSModel } from "../models/dcs.js"

function getMeetings(){
    return DCSModel.find()
}

export {
    getMeetings
}