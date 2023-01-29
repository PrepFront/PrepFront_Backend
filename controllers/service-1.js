import ContentOperation from "../database/operations/content.js"

const service1Controller={
    async getDetails(req,res){
        const data = await ContentOperation.getAllIntial()
        return res.json(data)
    }
}

export default service1Controller