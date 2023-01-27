import { UserModel } from "../models/user.js";

const userOperations = {
    add(obj) {
        return UserModel.create(obj)
    },
    find_by_email(email) {
        return UserModel.find({ email: email })
    },
    find_admins(){
        return UserModel.find({ isAdmin: true })
    }
}

export default userOperations