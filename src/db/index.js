import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); 
    console.log("MongoDB Connected. Host: ", connection.connection.host);
  } catch (error) {
    console.error("Error in connecting to MongoDB: ", error); 
    process.exit(1);
  }
}

export default connectDB;