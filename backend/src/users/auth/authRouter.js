import { Router } from "express";
import {
    addUserToSession,
    checkUserExists,
    createUser,
    removeUserFromSession,
} from "../userServices.js";
import * as jwt from "../../helpers/handleJWT.js";
import response from "../../helpers/reponseSchema.js";

const authRouter = Router();

authRouter.post("/login", async (req, res) => {
    const { email } = req.body;
    try {
        let user = await checkUserExists(email);
        if (!user.result) {
            throw new Error("User not found. Signup first.");
        }
        let session = await addUserToSession(user.user._id);
        let jwtToken = jwt.encrypt(session._id);

        res.cookie("jwt", jwtToken, {
            httpOnly: true,
            maxAge: 86400000,
            secure: true,
        });
        return res.json(response(true, user.user));
    } catch (error) {
        console.log(error);
        return res.status(400).json(response(false, error.toString()));
    }
});

authRouter.post("/signup", async (req, res) => {
    const { email, name, uid } = req.body;
    try {
        let user = await checkUserExists(email);
        if (user.result) {
            throw new Error("User already exists. Login first.");
        }
        let newUser = await createUser({ email, name, uid: uid });

        let session = await addUserToSession(newUser._id);
        let jwtToken = jwt.encrypt(session._id.toString());

        res.cookie("jwt", jwtToken, {
            httpOnly: true,
            maxAge: 86400000,
            secure: true,
        });
        return res.json(response(true, newUser));
    } catch (error) {
        return res.status(400).json(response(false, error.toString()));
    }
});

authRouter.post("/logout", async (req, res) => {
    const { email } = req.body;
    try {
        let user = await checkUserExists(email);
        await removeUserFromSession(user.user._id);
        return res.json(response(true));
    } catch (error) {
        return res.status(400).json(response(false, error.toString()));
    }
});

export default authRouter;
