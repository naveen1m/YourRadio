import { Router } from "express";
import UserModel from "./users.model.js";

import authRouter from "./auth/authRouter.js";

import {
    addUserToSession,
    checkUserExists,
    createUser,
} from "./userServices.js";

import auth from "../middleware/loginMiddleware.js";

const userRouter = Router();
userRouter.use("/auth", authRouter);
/** Create new user */
userRouter.post('/create', async (req, res) => {
    const { displayName, email, uid, username, about, tagline } = req.body;
    console.log(displayName, email, uid, username, about, tagline);

    const newUser = UserModel({
        name: displayName,
        email: email,
        _id: uid,
        userName: username,
        tagline: tagline,
        about: about,

    })
    console.log(newUser);
    try {
        await newUser.save();
        console.log('saved');
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        if (error.name === 'ValidationError') {
            // Handle validation errors
            res.status(400).json({ message: error.message });
        } else {
            // Handle other errors
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    }

})
userRouter.post('/checkusername', async (req, res) => {
    const { username } = req.body;
    console.log(username);
    try {
        const user = await UserModel.findOne({ userName: username });
        console.log(user)
        if (user) {
            res.status(400).json({ isUnique: false });
        } else {
            res.status(200).json({ isUnique: true });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
/** Get a user details */
userRouter.get('/get/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "no such user exist" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})

/** Update a user details */
userRouter.post('/get/:id', async (req, res) => {
    const id = req.params.id;
    const { name, username, photo, banner } = req.body;
    try {
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!user) {
            res.status(404).json({ message: "no such user exist" });
        }
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})
/** Follow a user */
userRouter.put('/follow/:id', async (req, res) => {
    const id = req.params.id;
    const { currentUserId } = req.body;

    if (currentUserId === id) {
        res.status(403).json({ message: "Action forbidden" });
    } else {
        try {
            const followUser = await UserModel.findById(id);
            const followingUser = await UserModel.findById(currentUserId);

            if (!followUser.followers.includes(currentUserId)) {
                await followUser.updateOne({ $push: { followers: currentUserId } });
                await followingUser.updateOne({ $push: { following: id } });
                res.status(200).json({ message: "User followed!" });
            } else {
                res.status(403).json({ message: "User is Already followed by you" });
            }

        } catch (error) {
            res.status(500).json(error);

        }
    }

});
userRouter.put('/unfollow/:id', async (req, res) => {
    const id = req.params.id;
    const { currentUserId } = req.body;

    if (currentUserId === id) {
        res.status(403).json("Action forbidden");
    } else {
        const followUser = await UserModel.findById(id);
        const followingUser = await UserModel.findById(currentUserId);
        if (followUser.followers.includes(currentUserId)) {
            await followUser.updateOne({ $pull: { followers: currentUserId } });
            await followingUser.updateOne({ $pull: { following: id } });
            res.status(200).json({ message: "User Unfollowed!" });
        } else {
            res.status(403).json({ message: "User is not followed by you" });
        }
    }
});

userRouter.get('/searchuser/:key', async (req, res) => {
    console.log(req.params.key)

    try {
        let data = await UserModel.find(
            {
                "$or": [
                    { name: { $regex: (req.params.key).toLowerCase(), $options: 'i' } },
                    { userName: { $regex: req.params.key } }
                ]
            }
        )
        res.status(200).send(data);
    } catch (error) {
        res.status(404).json({ error: 'not found' })
    }

});
/** delete a user */
userRouter.get('/get/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await UserModel.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})
export default userRouter;