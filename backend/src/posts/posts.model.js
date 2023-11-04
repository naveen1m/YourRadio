import mongoose, { Schema } from "mongoose";

const { ObjectId } = Schema.Types;
const PostSchema = new Schema({
    postedBy: {
        type: ObjectId,
        ref: "User",
    },
    audio: {
        type: Buffer,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    like: [
        {
            type: ObjectId,
            default: [],
            ref: "User",
        },
    ],
    comment: [
        {
            text: String,
            commentedBy: {
                type: ObjectId,
                ref: "User",
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
});

export default mongoose.model("Post", PostSchema);
