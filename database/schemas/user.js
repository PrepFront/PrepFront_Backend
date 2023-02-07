import { Schema } from "mongoose";
import { validateEmail } from "../../utils/validator.js";


const UserSchema = new Schema({
    'email': {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    'password': {
        type: String,
        required: true,
        maxlength: 1000,
        immutable: true
    },
    'full_name': {
        type: String,
        required: true
    },
    'isAdmin':{
        type: Boolean,
        default: false
    },
    'college': {
        type: String,
        required: true,
        default: 'NA',
        maxlength: 30,
    },
    'qualification':{
        type: String,
        maxlength: 20,
    },
    'phoneNo':{
        type: Schema.Types.ObjectId,
        ref: 'phoneNumber'
    }
},{
    timestamps: true,
})

export default UserSchema

