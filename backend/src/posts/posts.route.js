import { Router } from "express";
import response from "../helpers/reponseSchema.js";

import multer from "multer";
import * as PostServices from "./postServices.js";
import { uploadFile } from "../helpers/firebaseServices.js";

const upload = multer({
    fileFilter: (request, file, callback) => {
        let list = ["application/ogg", "audio/mpeg", "audio/mp4", "audio/x-wav"];
        if (list.includes(file.mimetype)) {
            callback(null, true);
        } else callback("Wrong file type sent", false);
    },
});

const postRouter = Router();

postRouter.post("/createpost", upload.single("audio"), async (req, res) => {
    const { title = "", description = "" } = req.body;
    const user = req.user;
    try {
        let url = await uploadFile(req.file, "posts");
        let post = await PostServices.createPost({
            title,
            description,
            postedBy: user._id,
            audio: url,
        });

        await PostServices.linkPostIdToAccount(user._id, post._id);

        return res.status(201).json(response(true, post));
    } catch (error) {
        console.log(error);
        return res.status(400).json(response(false, error.toString()));
    }
});

postRouter.get("/allpost", async (req, res) => {
    const user = req.user;
    try {
        return res.json(response(true, await PostServices.getAllPosts(user._id)));
    } catch (error) {
        return res.json(response(false, error.toString()));
    }
});

postRouter.get("/mypost", async (req, res) => {
    const user = req.user;
    try {
        return res.json(response(true, await PostServices.getAllMyPosts(user._id)));
    } catch (error) {
        return res.json(response(false, error.toString()));
    }
});

postRouter.post("/react", async (req, res) => {
    const { post_id } = req.body;
    const user = req.user;
    try {
        let like = await PostServices.addReaction(user._id, post_id);
        return res.json(response(true, like));
    } catch (error) {
        return res.json(response(false, error.toString()));
    }
});

export default postRouter;
