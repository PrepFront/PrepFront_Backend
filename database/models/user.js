import UserSchema from "../schemas/user.js";
import { model } from "mongoose";

const UserModel = model('user',UserSchema)

export default UserModel