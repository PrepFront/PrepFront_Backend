import { PhoneModel } from "../models/phoneNumber.js";

export default {
    add(obj){
        return PhoneModel.create(obj)
    }
}