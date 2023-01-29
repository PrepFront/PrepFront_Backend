import ContentOperation from "../database/operations/content.js"

const service3Controller={
    async getDetails(req,res){
        const data = await ContentOperation.getAllNonTechnical()
        return res.json(data)
    }
}

export default service3Controller