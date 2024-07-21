import mongoose , {Mongoose} from "mongoose";

const mongooseUrl = process.env.MONGODB_URL;

interface MongooseConnection {
    conn : Mongoose | null;
    promise : Promise<Mongoose> | null;
}

let cached : MongooseConnection = (global as any).mongoose;

if(!cached){
    cached = (global as any).mongoose = { conn : null, promise : null};
}
export const connectToDatabase = async () => {
    if(cached.conn){
        return cached.conn;
    }
    if(!mongooseUrl){
        throw new Error("MONGODB_URL is not defined");
    }
    cached.promise = cached.promise || mongoose.connect(mongooseUrl, {
        dbName : "Vidai",
        bufferCommands : false,
    });
    cached.conn = await cached.promise;
    return cached.conn; 
};