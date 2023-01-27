import { verifyAccessToken } from "../utils/jwt-serializer.js";

const authoriseUser = (req, res, next) => {
    const bearer = req.headers['authorization']
    console.log(bearer)
    const token = bearer.slice(7)
    if (!token) {
        res.status(401)
        return res.json({
            message: "User not authenticated"
        })
    }
    const user = verifyAccessToken(token)
    if (!user) {
        res.status(401)
        return res.json({
            message: "User not authenticated"
        })
    }
    req.user = user
    next()
}

export { authoriseUser }