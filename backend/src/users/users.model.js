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
    tagline: {
        type: String,
    },
    about: {
        type: String,
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
    posts: [{
        type: ObjectId,
        ref: "Post",
        default: [],
    }],
    podcasts: [
        {
            type: ObjectId,
            ref: "Podcast",
            default: [],
        }
    ],
    // followers: [{ type: ObjectId, ref: "User" }],
    // following: [{ type: ObjectId, ref: "User" }],

    // session expires in 1 day, so need to relogin
    expireAt: { type: Date, expires: 1 * 24 * 60 * 60 },
},
    { timestamps: true, collection: "user" }
)

const UserModel = mongoose.model("User", UserSchema)
export default UserModel;