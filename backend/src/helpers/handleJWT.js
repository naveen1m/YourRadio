import jwt from "jsonwebtoken";

export const encrypt = (message) => {
    const JWT_SK = process.env.JWT_SK;
    const JWT_EIN = process.env.JWT_EIN;

    const token = jwt.sign(JSON.stringify(message), JWT_SK);
    return token;
};

export const decrypt = (token) => {
    const JWT_SK = process.env.JWT_SK;

    return jwt.verify(token, JWT_SK);
};
