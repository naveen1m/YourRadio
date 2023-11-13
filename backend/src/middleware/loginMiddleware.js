import * as userServices from "../users/userServices.js";
import * as jwt from "../helpers/handleJWT.js";
import { admin_app } from "../database/firebaseConfig.js";
import response from "../helpers/reponseSchema.js";
export default async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (
            // req.originalUrl == "/user/auth/login" ||
            // req.originalUrl == "/user/auth/signup" 
            true
        ) {
            console.log("auth", authorization);
            let user = await admin_app.auth().verifyIdToken(authorization);
            console.log(user.email);
            let userMongo = await userServices.checkUserExists(user.email);
            if (userMongo.result) {
                req.user = userMongo.user;
                return next();
            } else {
                // create new user
                const userMongo = await userServices.createUser({
                    email: user.email,
                    uid: user.uid,
                    name: "temp",
                });
                req.user = userMongo;
                return next();
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json(response(false, error.toString()));
    }
};
