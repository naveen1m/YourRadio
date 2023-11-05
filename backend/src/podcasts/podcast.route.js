import { Router } from "express";

const podcastRouter = Router();

podcastRouter.post("/", (req, res) => {
    res.send(`podcast route page`);
});

export default podcastRouter;
