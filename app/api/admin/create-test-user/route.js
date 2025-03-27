import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/lib/models/userModel";

export async function GET(request) {
  try {
    // Force clear all existing connections
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
    
    // Connect with explicit database name
    await mongoose.connect(process.env.MONGODB_URI);
    
    console.log("Connected to MongoDB:", mongoose.connection.name);
    console.log("Available collections:", 
      await mongoose.connection.db.listCollections().toArray().then(cols => cols.map(c => c.name)));
    
    // Check if users collection exists
    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionsNames = collections.map(c => c.name);
    
    if (!collectionsNames.includes('users')) {
      console.log("Creating 'users' collection as it doesn't exist");
      await mongoose.connection.db.createCollection('users');
    }
    
    // Create a test user
    const testUser = new User({
      clerkId: `test-${Date.now()}`,
      firstName: "Test",
      lastName: "User",
      email: `test-${Date.now()}@example.com`,
      userName: `testuser${Date.now()}`,
      createdAt: new Date()
    });
    
    await testUser.save();
    console.log("Test user created:", testUser);
    
    // Count users after creation
    const userCount = await User.countDocuments({});
    
    // Find all users
    const allUsers = await User.find({});
    
    return NextResponse.json({
      message: "Test user created successfully",
      testUser,
      userCount,
      allUsers,
      database: mongoose.connection.name,
      collections: collectionsNames
    });
  } catch (error) {
    console.error("Error creating test user:", error);
    return NextResponse.json({ 
      error: error.message,
      stack: error.stack 
    }, { status: 500 });
  }
} 