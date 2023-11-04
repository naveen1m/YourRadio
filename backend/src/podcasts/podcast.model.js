import mongoose, { Schema } from "mongoose";

const { ObjectId } = Schema.Types;
const PostSchema = new Schema({
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    audio: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    like: [{
        type: ObjectId,
        ref: "User"
    }],
    comments: {
        type: Number
    },
    comment: [{
        text: String,
        commentedBy: {
            type: ObjectId,
            ref: "User"
        },
        commentedAt: {
            type: Date,
            default: Date.now,
        },
    },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },

})

export default mongoose.model.Post || mongoose.model("Post", PostSchema);