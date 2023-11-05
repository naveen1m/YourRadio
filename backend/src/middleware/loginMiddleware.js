import express from "express";
import * as userServices from "../users/userServices.js";
import * as jwt from "../helpers/handleJWT.js";


export default async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (
            req.originalUrl == "/user/auth/login" ||
            req.originalUrl == "/user/auth/signup"
        ) {
            next();
        }
        let sessionId = jwt.decrypt(authorization);
        const stringRep = sessionId
            .toString()
            .substring(1, sessionId.toString().length - 1);

        let data = await userServices.getSessionDetails(stringRep);
        if (!data) {
            throw new Error("Session invalid. Login again");
        }
        let user = data.user;
        if (user) req.user = user;
        else throw new Error("User unavailable. Signup first");
        next();
    } catch (error) {
        return res.json({ message: error.message });
    }
};
