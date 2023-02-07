import { send_email } from "../utils/send_email.js"
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

        const text = `
            Your meeting is scheduled on ${date_time}. Meeting URL: ${meetingURL}. Join on time.
        `
        try{
            const data = await send_email(emails,'Upcoming Meetings',text)
            return res.json(data)
        } catch(e){
            return res.status(400).send('error occured')
        }
    }
}

export default service4Controller