import { Schema } from "mongoose";
import { generateUUID } from "../../utils/uuid.js";

const DCSSchema = new Schema({
    expert: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'expert'
    },
    time: {
        type: Schema.Types.Date,
        required: true
    },
    meetingUrl: {
        type: Schema.Types.String
    },
    name: {
        type: Schema.Types.String,
        required: true
    }
}, {
    timestamps: true,
    autoIndex: true
})

DCSSchema.pre('save', function (next) {
    this.meetingUrl = `https://meet.jit.si/${generateUUID()}`
    this.time = (new Date(this.time))/1000
    console.log(this.expert)
    next();
});

export default DCSSchema