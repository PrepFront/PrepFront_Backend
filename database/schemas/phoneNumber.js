import { Schema } from "mongoose";

const PhoneNumberSchema = new Schema({
    'countryCode':{
        type: String,
        enum: ["+91","+92"],
    },
    'number': {
        type: String,
        maxLength: 10,
        minLength: 10,
    }
})

export default PhoneNumberSchema