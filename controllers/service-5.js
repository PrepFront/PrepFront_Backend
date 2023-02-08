import { getMeetings } from "../database/operations/dcs.js"

const service5Controller={
    async getMeetings(req,res){
        const data = await getMeetings()
        res.json(data)
    }
}

export default service5Controller