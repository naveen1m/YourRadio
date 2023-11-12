import User from "./users.model.js";
import { default as Session } from "../session.model.js";

export const checkUserExists = async (email, username) => {
    let user = await User.findOne({
        $or: [{ email: email }],
    });
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

export const createUser = async ({ email, name, uid }) => {
    return await User.create({ email, name, uid });
};

export const getSessionDetails = async (session_id) => {
    return Session.findById(session_id).populate('user');
};
