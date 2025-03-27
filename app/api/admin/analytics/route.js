import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/lib/models/userModel";
import { auth } from "@clerk/nextjs";
import { getAdminStatus } from "@/lib/actions/admin";

export async function GET(request) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Verify admin status
    const isAdmin = await getAdminStatus(userId);
    
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }
    
    await connectToDatabase();
    
    // Get total users count
    const totalUsers = await User.countDocuments({});
    
    // Get new users in last 7 days
    const lastWeekDate = new Date();
    lastWeekDate.setDate(lastWeekDate.getDate() - 7);
    const newUsers = await User.countDocuments({
      createdAt: { $gte: lastWeekDate }
    });
    
    // Get new users in last 30 days
    const lastMonthDate = new Date();
    lastMonthDate.setDate(lastMonthDate.getDate() - 30);
    const monthlyNewUsers = await User.countDocuments({
      createdAt: { $gte: lastMonthDate }
    });
    
    // Get user growth by day for the last 7 days
    const dailyGrowth = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);
      
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + 1);
      
      const count = await User.countDocuments({
        createdAt: { 
          $gte: date,
          $lt: nextDate
        }
      });
      
      dailyGrowth.push({
        date: date.toISOString().split('T')[0],
        count
      });
    }
    
    return NextResponse.json({
      totalUsers,
      newUsers,
      monthlyNewUsers,
      dailyGrowth
    });
    
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 });
  }
} 