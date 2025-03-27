import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/lib/models/userModel";
import mongoose from "mongoose";
import { auth } from "@clerk/nextjs";

export async function GET(request) {
  try {
    // Get authentication status
    const { userId } = auth();
    
    // Basic auth check
    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    
    // Test results object
    const results = {
      tests: [],
      mongodbInfo: {},
      userCount: 0,
      userSample: null,
      currentUser: null,
      allCollections: [],
      errors: []
    };
    
    // Test 1: Check MongoDB connection
    try {
      results.tests.push({ name: "MongoDB Connection", status: "Running" });
      await connectToDatabase();
      results.tests[0].status = "Success";
      
      // Get MongoDB connection info
      results.mongodbInfo = {
        host: mongoose.connection.host,
        name: mongoose.connection.name,
        readyState: mongoose.connection.readyState,
        models: Object.keys(mongoose.models),
      };
    } catch (error) {
      results.tests[0].status = "Failed";
      results.tests[0].error = error.message;
      results.errors.push({ test: "MongoDB Connection", error: error.message, stack: error.stack });
      // Continue with other tests even if this fails
    }
    
    // Test 2: Count users
    try {
      results.tests.push({ name: "Count Users", status: "Running" });
      const count = await User.countDocuments({});
      results.userCount = count;
      results.tests[1].status = "Success";
      results.tests[1].count = count;
    } catch (error) {
      results.tests[1].status = "Failed";
      results.tests[1].error = error.message;
      results.errors.push({ test: "Count Users", error: error.message, stack: error.stack });
    }
    
    // Test 3: Find users
    try {
      results.tests.push({ name: "Find Users", status: "Running" });
      const users = await User.find({}).limit(5);
      results.tests[2].status = "Success";
      results.tests[2].found = users.length;
      
      if (users.length > 0) {
        // Provide a sample user with sensitive data removed
        results.userSample = {
          _id: users[0]._id.toString(),
          clerkId: users[0].clerkId,
          firstName: users[0].firstName,
          lastName: users[0].lastName,
          email: users[0].email,
          userName: users[0].userName,
          createdAt: users[0].createdAt,
        };
      }
    } catch (error) {
      results.tests[2].status = "Failed";
      results.tests[2].error = error.message;
      results.errors.push({ test: "Find Users", error: error.message, stack: error.stack });
    }
    
    // Test 4: Find current user
    try {
      results.tests.push({ name: "Find Current User", status: "Running" });
      const currentUser = await User.findOne({ clerkId: userId });
      results.tests[3].status = "Success";
      results.tests[3].found = !!currentUser;
      
      if (currentUser) {
        results.currentUser = {
          _id: currentUser._id.toString(),
          clerkId: currentUser.clerkId,
          firstName: currentUser.firstName,
          lastName: currentUser.lastName,
          email: currentUser.email,
          userName: currentUser.userName,
          createdAt: currentUser.createdAt,
        };
      }
    } catch (error) {
      results.tests[3].status = "Failed";
      results.tests[3].error = error.message;
      results.errors.push({ test: "Find Current User", error: error.message, stack: error.stack });
    }
    
    // Test 5: List all collections
    try {
      results.tests.push({ name: "List Collections", status: "Running" });
      const collections = await mongoose.connection.db.listCollections().toArray();
      results.allCollections = collections.map(c => c.name);
      results.tests[4].status = "Success";
      results.tests[4].collections = results.allCollections;
    } catch (error) {
      results.tests[4].status = "Failed";
      results.tests[4].error = error.message;
      results.errors.push({ test: "List Collections", error: error.message, stack: error.stack });
    }
    
    return NextResponse.json(results);
  } catch (error) {
    console.error("Test DB Error:", error);
    return NextResponse.json({
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
} 