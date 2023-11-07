import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connect() {
    const mongodb = await MongoMemoryServer.create();

    const uri = process.env.MONGOD_URI ?? mongodb.getUri();


    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(uri, { dbName: 'your-radio' });

    console.log("Database connected to", uri);

    return db;
}

export default connect;