import { passwordChecker } from "./password-hasher.js"
import userOperations from '../database/operations/user.js'

const authenticate = async (email, password) => {
    const ADMINS = await userOperations.find_admins()
    for (let index in ADMINS) {
        const ADMIN = ADMINS[index]
        const passwordValid = await passwordChecker(password, ADMIN.password)
        if (email === ADMIN.email && passwordValid) {
            return Promise.resolve(ADMIN)
        }
    }
    return null
}

export default authenticate