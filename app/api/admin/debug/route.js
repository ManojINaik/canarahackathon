import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/lib/models/userModel";
import { auth } from "@clerk/nextjs";

export async function GET(request) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    
    await connectToDatabase();
    
    // Check if user exists in database
    const user = await User.findOne({ clerkId: userId });
    
    if (!user) {
      return NextResponse.json({ 
        exists: false,
        message: "User not found in database",
        clerkId: userId
      });
    }
    
    // Check admin status
    const adminEmails = ["naik97059@gmail.com", "test@example.com", "admin@test.com"];
    const isAdmin = adminEmails.includes(user.email);
    
    return NextResponse.json({
      exists: true,
      user: {
        id: user._id,
        clerkId: user.clerkId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userName: user.userName,
        createdAt: user.createdAt
      },
      adminCheck: {
        isAdmin,
        adminEmails,
        emailMatch: adminEmails.includes(user.email)
      }
    });
    
  } catch (error) {
    console.error("Debug error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 