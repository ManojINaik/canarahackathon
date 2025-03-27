import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is not defined in environment variables");
    throw new Error("Please define the MONGODB_URI environment variable");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}; 