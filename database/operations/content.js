import { ContentModel } from "../models/content.js"

const ContentOperation = {
    getAllTechnical() {
        return ContentModel.find({
            feild: "tech"
        })
    },
    getAllNonTechnical(){
        return ContentModel.find({
            feild: "non-tech"
        })
    },
    getAllIntial(){
        return ContentModel.find({
            feild: "initial"
        })
    }
}

export default ContentOperation