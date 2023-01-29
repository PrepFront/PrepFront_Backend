import ContentOperation from "../database/operations/content.js"

const service2Controller={
    async getDetails(req,res){
        const data = await ContentOperation.getAllTechnical()
        return res.json(data)
    }
}

export default service2Controller