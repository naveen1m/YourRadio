import mongoose, { Schema } from "mongoose";

const { ObjectId } = Schema.Types;
const SessionSchema = new Schema(
    {
        user: {
            type: ObjectId,
            ref: "User",
        },

        // session expires in 1 day, so need to relogin
        expireAt: { type: Date, expires: 1 * 24 * 60 * 60 },
    },
    { timestamps: true, collection: "session" }
);

export default mongoose.model("Session", SessionSchema);
