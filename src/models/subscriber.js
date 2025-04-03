import mongoose from "mongoose"

const susbcriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedChannel: {
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {
    timestamps: true
}
)

export const Subscriber = mongoose.model("Subscriber", susbcriberSchema)