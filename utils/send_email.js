import Mailgun from "mailgun-js";

const API_KEY = process.env.MAILGUN_API_KEY
const DOMAIN = process.env.MAILGUN_BASE_URL

export function sendMeetingConfirmation(emails,user,link,dateTime,expert) {
    const mg = Mailgun({
        apiKey: API_KEY,
        domain: DOMAIN
    })

    const dt = new Date(dateTime)

    const { full_name } = user
    const {name:expert_name} = expert
     const dataToSend = {
        from: 'Hiten Vats <hitenvats16@gmail.com>',
        to: emails,
        subject: `Meeting Scheduled with ${expert_name}`,
        template: "meet_schedule",
        'h:X-Mailgun-Variables': JSON.stringify({ 
            full_name,
            link,
            date: dt.toLocaleDateString(),
            time: dt.toLocaleTimeString(),
            expert_name
         })
    }
    return mg.messages().send(dataToSend)
}