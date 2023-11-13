import User from "./users.model.js";
import { default as Session } from "../session.model.js";

export const checkUserExists = async (email) => {
    let user = await User.findOne({
        $or: [{ email: email }],
    });
    if (user) {
        return { result: true, user: user };
    } else {
        return { result: false };
    }
};

export const updateUserDetails = async (id, body) => {
    let user = await User.findByIdAndUpdate(id, body);
    if (user) {
        return { result: true, user: user };
    } else {
        return { result: false };
    }
};

export const addUserToSession = async (user_id) => {
    let user = await Session.findOne({ user: user_id });
    if (user) {
        await removeUserFromSession(user_id); // expires previous token
    }
    return await Session.create({ user: user_id });
};

export const removeUserFromSession = async (user_id) => {
    await Session.findOneAndRemove({ user: user_id });
};

export const createUser = async (body) => {
    console.log(body);
    return await User.create(body);
};

export const getSessionDetails = async (session_id) => {
    return Session.findById(session_id).populate("user");
};
