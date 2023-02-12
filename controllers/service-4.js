import { sendMeetingConfirmation } from "../utils/send_email.js"
import { generateUUID } from "../utils/uuid.js"

const service4Controller = {
    async scheduleMeeting(req, res) {
        let {date_time, expert} = req.body
        if(!date_time || !expert){
            res.status(400)
            return res.json({
                message: "need to select date and expert"
            })
        }
        date_time = (new Date(date_time)).toISOString()
        const emails = [req.user.email, expert.email]
        const meetingURL = `https://meet.jit.si/${generateUUID()}`
        try{
            const data = await sendMeetingConfirmation(emails,req.user,meetingURL,date_time,expert)
            return res.json(data)
        } catch(e){
            console.log(e)
            return res.status(400).send('error occured')
        }
    }
}

export default service4Controller