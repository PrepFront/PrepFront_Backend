import PhoneNumberSchema from "../schemas/phoneNumber.js";
import { model } from "mongoose";

const PhoneModel = model('phoneNumber', PhoneNumberSchema)

export { PhoneModel }