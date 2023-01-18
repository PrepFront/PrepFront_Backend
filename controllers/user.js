import userOperations from "../database/operations/user.js";
import { passwordHasher, passwordChecker } from "../utils/password-hasher.js";
import { generateAccessToken, generateRefreshToken, generateAcessTokenFromRefreshToken } from "../utils/jwt-serializer.js";

const userController = {
    async add(req, res) {
        const { password, full_name, email } = req.body
        if (password.length === 0 || email.length === 0 || full_name.length === 0) return res.status(400).json({
            message: "feilds can't be empty"
        })
        const user = await userOperations.find_by_email(email)
        if (user.length > 0) {
            return res.status(400).json({
                message: "account with this email already exist"
            })
        }
        const hashedPass = await passwordHasher(password.toString())
        if (!hashedPass) {
            return res.status(500)
        }
        try {
            let newuser = await userOperations.add({
                password: hashedPass,
                full_name: full_name,
                email
            })
            newuser = Object.keys(newuser._doc).filter(key =>
                key !== 'password').reduce((obj, key) => {
                    obj[key] = newuser._doc[key];
                    return obj;
                }, {}
                )
            res.status(201)
            return res.json(newuser)
        }
        catch (e) {
            return res.json({
                message: e.message
            })
        }
    },
    async login(req, res) {
        const { email, password } = req.body
        if (password.length === 0 || email.length === 0) return res.status(400).json({
            message: "feilds can't be empty"
        })
        const user = await userOperations.find_by_email(email)
        if (user.length == 0) {
            res.status(401)
            return res.json({
                message: "user with this email does not exist"
            })
        }
        const check = await passwordChecker(password.toString(), user[0].password)
        if (!check) {
            res.status(400)
            return res.json({
                message: "email or pass is incorrect"
            })
        }
        let newuser = user[0]
        newuser = Object.keys(newuser._doc).filter(key =>
            key !== 'password').reduce((obj, key) => {
                obj[key] = newuser._doc[key];
                return obj;
            }, {}
            )
        const access_token = generateAccessToken(newuser)
        const refresh_token = generateRefreshToken(newuser)
        return res.json({
            access_token,
            refresh_token
        })
    },
    async generateAccessFromRefresh(req, res) {
        const { refresh_token } = req.body
        const token = generateAcessTokenFromRefreshToken(refresh_token)
        if (token == null) {
            res.status(401)
            return res.json({
                message: "invalid token signature"
            })
        }
        res.status(200)
        return res.json({
            access_token: token,
            refresh_token
        })
    },
    async getUserDetails(req, res) {
        return res.json(req.user)
    }
}

export default userController