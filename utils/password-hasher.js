import bcrypt from "bcrypt"

const passwordHasher = async (password) => {
    try {
        const salt = await bcrypt.genSalt()
        return bcrypt.hash(password, salt)
    }
    catch (e) {
        console.log(e)
    }
}

const passwordChecker = async (password, hash) => {
    return await bcrypt.compare(password, hash)
}

export { passwordHasher, passwordChecker }