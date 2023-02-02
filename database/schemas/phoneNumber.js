import { Schema } from "mongoose";

const PhoneNumberSchema = new Schema({
    'countryCode':{
        type: String,
        enum: ["+91","+92"],
        default: "+91"
    },
    'number': {
        type: String,
        maxLength: 10,
        minLength: 10,
        required: true,
    }
})

export default PhoneNumberSchema