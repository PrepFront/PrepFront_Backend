import { Schema } from "mongoose";
import { validateEmail } from "../../utils/validator.js";

const ExpertSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: true
    },
    profession: {
        type: Schema.Types.String,
        enum: ['Working','Student']
    },
    position: {
        type: Schema.Types.String,
    },
    organization: {
        type: Schema.Types.String
    }
})
export default ExpertSchema