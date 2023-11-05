import postModel from "./posts.model.js";
import userModel from "../users/users.model.js";
export const createPost = async (body) => {
    return await postModel.create(body);
};

export const getSinglePost = async (post_id) => {
    return await postModel.findById(post_id);
};

export const getAllPosts = async (user_id) => {
    //   let friends_followers = await userModel
    //     .findById(user_id, { followers: 1, friends: 1 })
    //     .populate({ path: "friends followers", populate: { path: "posts" } });

    //   console.log(friends_followers);

    //   let a = friends_followers.friends.forEach((friend) => {});

    //   return friends_followers;

    //   TODO: FRIENDS AND FW feed;
    let posts = await userModel.findById(user_id, { posts: 1 });
    return posts.posts;
};

export const addReaction = async (user_id, post_id) => {
    let post = await postModel.findById(post_id, { like: 1 });
    await post.updateOne({ $addToSet: { like: user_id } });
    return post;
};
