import { Schema } from "mongoose";

const PhoneNumberSchema = new Schema({
    'countryCode':{
        type: String,
        enum: ["+91","+92"],
        required: true
    },
    'number': {
        type: String,
        maxLength: 10,
        minLength: 10,
        required: true,
    }
})

export default PhoneNumberSchema