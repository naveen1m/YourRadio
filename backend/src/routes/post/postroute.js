import express, { Router } from 'express'
const postRouter = Router();

postRouter.get('/', (req, res) => {
    res.send(`post route page`);
})

export default postRouter;
