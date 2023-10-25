import express, { Router } from 'express'
const podcastRouter = Router();

podcastRouter.get('/', (req, res) => {
    res.send(`podcast route page`);
});

export default podcastRouter;