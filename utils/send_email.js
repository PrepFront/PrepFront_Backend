import Mailgun from "mailgun-js";

const API_KEY = process.env.MAILGUN_API_KEY
const DOMAIN = process.env.MAILGUN_BASE_URL

function send_email(emails,subject,text) {
    const mg = Mailgun({
        apiKey: API_KEY,
        domain: DOMAIN
    })
    const dataToSend = {
        from: 'Hiten Vats <hitenvats16@gmail.com>',
        to: emails,
        subject: subject,
        text: text
    }
    return mg.messages().send(dataToSend)
}

export {send_email}