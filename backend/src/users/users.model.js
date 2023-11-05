import mongoose, { Schema } from "mongoose";

const { ObjectId } = mongoose.Schema.Types;
const UserSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
    },
    photo: {
        type: Buffer,
    },
    banner: {      // for notification page
        type: Buffer,
    },
    followers: [String],
    following: [String],
    // followers: [{ type: ObjectId, ref: "User" }],
    // following: [{ type: ObjectId, ref: "User" }],
})

const UserModel = mongoose.model("User", UserSchema)
export default UserModel;