import mongoose, { Schema } from "mongoose";

export const PostSchema = new Schema({
    username: {
        type: String
    }
})

export default mongoose.model.Post || mongoose.model("Post", PostSchema);