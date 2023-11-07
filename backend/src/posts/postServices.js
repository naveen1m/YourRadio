import postModel from "./posts.model.js";
import userModel from "../users/users.model.js";

export const createPost = async (body) => {
    return await postModel.create(body);
};

export const linkPostIdToAccount = async (user_id, post_id) => {
    return await userModel.findByIdAndUpdate(
        user_id,
        { $addToSet: { posts: post_id } },
        { new: true }
    );
};

export const getSinglePost = async (post_id) => {
    return await postModel.findById(post_id);
};

export const getAllMyPosts = async (user_id) => {
    return await userModel
        .findById(user_id, { posts: 1, _id: 0 })
        .populate("posts");
};

export const getAllPosts = async (user_id) => {
    return await postModel.find({});
};

export const addReaction = async (user_id, post_id) => {
    let post = await postModel.findByIdAndUpdate(
        post_id,
        {
            $addToSet: { like: user_id },
        },
        { new: true }
    );
    return post;
};
