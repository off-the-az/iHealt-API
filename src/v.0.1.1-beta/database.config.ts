import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export default async function dbconn() {
    mongoose.Promise = global.Promise;
    await mongoose.set('strictQuery', true);
    await mongoose.connect(`${process.env.MONGODB_URL}`, {
        autoCreate: true,
    }).then(()=>{
        console.log('MongoDB connection done')
    }).catch((err)=> console.log(`Error during connection: ${err}`));
}