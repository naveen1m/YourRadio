import { Router } from "express";
import {
    addUserToSession,
    checkUserExists,
    createUser,
    removeUserFromSession,
    updateUserDetails,
} from "../userServices.js";
import * as jwt from "../../helpers/handleJWT.js";
import response from "../../helpers/reponseSchema.js";
import loginMiddleware from "../../middleware/loginMiddleware.js";

const authRouter = Router();

authRouter.post("/login", loginMiddleware, async (req, res) => {
    const user = req.user;
    try {
        // let user = await checkUserExists(email);
        // if (!user.result) {
        //   throw new Error("User not found. Signup first.");
        // }
        // // let session = await addUserToSession(user.user._id);
        // // let jwtToken = jwt.encrypt(session._id);

        // // res.cookie("jwt", jwtToken, {
        // //   httpOnly: true,
        // //   maxAge: 86400000,
        // //   secure: true,
        // // });
        // return res.json(response(true, user.user));
        console.log(user);

        return res.json(response(true, user));
    } catch (error) {
        console.log(error);
        return res.status(400).json(response(false, error.toString()));
    }
});

authRouter.post("/signup", loginMiddleware, async (req, res) => {
    const { displayName, username, about, tagline } = req.body;
    const user = req.user;
    try {
        let formBody = {
            name: displayName,
            userName: username,
            tagline: tagline,
            about: about,
        };
        let newUser = await updateUserDetails(user._id, formBody);

        return res.json(response(true, newUser));
    } catch (error) {
        console.log(error);
        return res.status(400).json(response(false, error.toString()));
    }
});

authRouter.post("/logout", async (req, res) => {
    const { email } = req.body;
    try {
        //     let user = await checkUserExists(email);
        //     await removeUserFromSession(user.user._id);
        return res.json(response(true));
    } catch (error) {
        return res.status(400).json(response(false, error.toString()));
    }
});

export default authRouter;
