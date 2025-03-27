"use server";

import { connectToDatabase } from "../mongodb";
import User from "../models/userModel";
import mongoose from "mongoose";

// Hardcoded admin emails for simplicity
// In production, use a more secure approach like a separate admin model or role field
const ADMIN_EMAILS = ["naik97059@gmail.com", "test@example.com", "admin@test.com"];

export async function getAdminStatus(clerkId) {
  console.log("getAdminStatus called with clerkId:", clerkId);
  
  if (!clerkId) {
    console.log("No clerkId provided");
    return false;
  }
  
  try {
    console.log("Connecting to database...");
    await connectToDatabase();
    console.log("Connected to database");
    
    console.log("Finding user with clerkId:", clerkId);
    const user = await User.findOne({ clerkId });
    
    if (!user) {
      console.log("User not found in database:", clerkId);
      return false;
    }
    
    console.log("User found:", user.email);
    console.log("Admin emails:", ADMIN_EMAILS);
    
    // Check if the user's email is in the admin list
    const isAdmin = ADMIN_EMAILS.includes(user.email);
    console.log("Email is in admin list:", isAdmin);
    
    return isAdmin;
  } catch (error) {
    console.error("Error checking admin status:", error);
    
    // In case of error, return a default value (false)
    // This prevents the admin page from breaking
    return false;
  }
}

// For emergency access, add a direct email check function
export async function isAdminEmail(email) {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email);
}

export async function getAllUsers() {
  console.log("getAllUsers: Starting to fetch all users");
  try {
    console.log("getAllUsers: Connecting to database");
    await connectToDatabase();
    console.log("getAllUsers: Connected to database");
    
    console.log("getAllUsers: Querying all users");
    const users = await User.find({})
      .select("firstName lastName email userName createdAt")
      .sort({ createdAt: -1 });
    
    console.log("getAllUsers: Found users count:", users.length);
    
    if (users.length > 0) {
      console.log("getAllUsers: Sample first user:", JSON.stringify(users[0]));
    }
    
    const serializedUsers = JSON.parse(JSON.stringify(users));
    return serializedUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    console.error("Error stack:", error.stack);
    
    // Attempt to find any users with a simpler query as a fallback
    try {
      console.log("getAllUsers: Attempting fallback query");
      const count = await User.estimatedDocumentCount();
      console.log("getAllUsers: Estimated user count:", count);
      
      if (count > 0) {
        const simpleUsers = await User.find({}).limit(10);
        console.log("getAllUsers: Found users with fallback:", simpleUsers.length);
        return JSON.parse(JSON.stringify(simpleUsers));
      }
    } catch (fallbackError) {
      console.error("Fallback query also failed:", fallbackError);
    }
    
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
}

export async function getUserStats() {
  console.log("getUserStats: Starting to fetch user statistics");
  try {
    console.log("getUserStats: Connecting to database");
    await connectToDatabase();
    console.log("getUserStats: Connected to database");
    
    // Force close and reconnect to get fresh connection
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
    await mongoose.connect(process.env.MONGODB_URI);
    
    console.log("getUserStats: Database name:", mongoose.connection.name);
    
    // List all collections to verify
    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    console.log("getUserStats: Available collections:", collectionNames);
    
    let totalUsers = 0;
    let newUsers = 0;
    
    // Try to directly count from the collection rather than through model
    if (collectionNames.includes('users')) {
      console.log("getUserStats: Using direct collection access");
      const usersCollection = mongoose.connection.db.collection('users');
      
      // Count total users
      totalUsers = await usersCollection.countDocuments({});
      console.log("getUserStats: Total users from direct collection:", totalUsers);
      
      // Count new users in last 7 days
      const lastWeekDate = new Date();
      lastWeekDate.setDate(lastWeekDate.getDate() - 7);
      
      newUsers = await usersCollection.countDocuments({
        createdAt: { $gte: lastWeekDate }
      });
      console.log("getUserStats: New users from direct collection:", newUsers);
    } else {
      // Fallback to model-based counting
      console.log("getUserStats: No 'users' collection found, falling back to model");
      totalUsers = await User.countDocuments({});
      
      const lastWeekDate = new Date();
      lastWeekDate.setDate(lastWeekDate.getDate() - 7);
      
      newUsers = await User.countDocuments({
        createdAt: { $gte: lastWeekDate }
      });
    }
    
    // Ensure we return numbers, not undefined
    const result = {
      totalUsers: totalUsers || 0,
      newUsers: newUsers || 0
    };
    
    console.log("getUserStats: Returning result:", result);
    return result;
  } catch (error) {
    console.error("Error fetching user stats:", error);
    
    // Return default values in case of error
    return {
      totalUsers: 0,
      newUsers: 0
    };
  }
}

// Fetch users sorted by discussion votes
export async function getUsersByVotes() {
  console.log("getUsersByVotes: Starting to fetch users by vote count");
  try {
    console.log("getUsersByVotes: Connecting to database");
    await connectToDatabase();
    console.log("getUsersByVotes: Connected to database");
    
    // Aggregate to join users with questions and calculate total votes
    const usersWithVotes = await User.aggregate([
      // Lookup to get all questions by each user
      {
        $lookup: {
          from: "questions",
          localField: "clerkId",
          foreignField: "author",
          as: "questions"
        }
      },
      // Add a field for total votes across all questions
      {
        $addFields: {
          totalVotes: {
            $sum: "$questions.votes"
          },
          questionCount: {
            $size: "$questions"
          }
        }
      },
      // Sort by total votes in descending order
      {
        $sort: {
          totalVotes: -1
        }
      },
      // Project only needed fields
      {
        $project: {
          _id: 1,
          clerkId: 1,
          firstName: 1,
          lastName: 1,
          email: 1,
          userName: 1,
          bio: 1,
          skills: 1,
          jobTitle: 1,
          resumeUrl: 1,
          github: 1,
          linkedin: 1,
          portfolio: 1,
          experience: 1,
          education: 1,
          image_url: 1,
          totalVotes: 1,
          questionCount: 1,
          createdAt: 1
        }
      }
    ]);
    
    console.log("getUsersByVotes: Found users count:", usersWithVotes.length);
    
    // Return serialized data
    return JSON.parse(JSON.stringify(usersWithVotes));
  } catch (error) {
    console.error("Error fetching users by votes:", error);
    console.error("Error stack:", error.stack);
    throw new Error(`Failed to fetch users by votes: ${error.message}`);
  }
}

// Get detailed user profile by ID (for admin viewing)
export async function getUserProfileById(userId) {
  console.log("getUserProfileById: Fetching user profile for", userId);
  try {
    await connectToDatabase();
    
    // Use a more specific query with field selection to ensure all needed fields are included
    const user = await User.findOne({ clerkId: userId })
      .select(`
        _id clerkId firstName lastName email userName 
        bio skills resumeUrl github linkedin portfolio
        jobTitle experience education image_url
        jobPreferences createdAt
      `)
      .lean(); // Use lean() for better performance with large objects
    
    if (!user) {
      throw new Error("User not found");
    }
    
    console.log("getUserProfileById: Found user profile fields:", Object.keys(user));
    
    // Add a more robust serialization that preserves all fields
    const serializedUser = JSON.parse(JSON.stringify(user));
    
    return serializedUser;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw new Error(`Failed to fetch user profile: ${error.message}`);
  }
} 