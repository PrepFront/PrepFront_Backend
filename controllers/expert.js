import { getExperts } from "../database/operations/expert.js"

const expertController = {
    async getExperts(req,res){
        const data = await getExperts()
        return res.json(data)
    }
}

export default expertController