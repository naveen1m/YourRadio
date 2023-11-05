import express, { Router } from "express";
import Post from "./posts.model.js";
import path from "path";
import fs from "fs";
import response from "../helpers/reponseSchema.js";

import multer from "multer";

import * as PostServices from "../../services/postServices.js";

const upload = multer({
    dest: "bin/post/",
    fileFilter: (request, file, callback) => {
        let list = ["application/ogg", "audio/mpeg", "audio/mp4", "audio/x-wav"];
        if (list.includes(file.mimetype)) {
            callback(null, true);
        } else callback("Wrong file type sent", false);
    },
});

const postRouter = Router();

postRouter.post("/createpost", upload.single("audio"), async (req, res) => {
    const { title = "", description = "", postedBy } = req.body;
    try {
        let d = await PostServices.createPost({
            title,
            description,
            postedBy,
            audio: 0,
        });
        return res.status(201).json(response(true, d));
    } catch (error) {
        console.log(error);
        return res.status(400).json(response(false, error.toString()));
    }
}); // completed

postRouter.get("/allpost", async (req, res) => {
    try {
        return res.json(
            response(true, await PostServices.getAllPosts(user.userid))
        );
    } catch (error) {
        return res.json(response(false, error.toString()));
    }
}); // 

postRouter.get("/mypost", async (req, res) => {
    try {
        return res.json(
            response(true, await PostServices.getAllPosts(user.userid))
        );
    } catch (error) {
        return res.json(response(false, error.toString()));
    }
});

postRouter.put("/react", async (req, res) => {
    const { user_id, post_id } = req.body;
    try {
        let like = await PostServices.addReaction(user_id, post_id);
        return res.json(response(true, like));
    } catch (error) {
        return res.json(response(false, error.toString()));
    }
});

export default postRouter;
