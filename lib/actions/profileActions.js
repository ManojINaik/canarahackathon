"use server";

import { auth } from "@clerk/nextjs";
import User from "../models/userModel";
import { connectToDB } from "../mongodb/database";
import { uploadFile } from "../utils/cloudinary";

// Helper function to convert MongoDB document to plain object
function serializeMongoDBDocument(doc) {
  if (!doc) return null;
  
  // If it's already a plain object (or primitive), return as is
  if (typeof doc !== 'object' || doc === null) return doc;
  
  // If it has toObject method (Mongoose document), use it
  if (typeof doc.toObject === 'function') {
    return doc.toObject();
  }
  
  // If it's an array, serialize each item
  if (Array.isArray(doc)) {
    return doc.map(item => serializeMongoDBDocument(item));
  }
  
  // If it's a Date, convert to ISO string
  if (doc instanceof Date) {
    return doc.toISOString();
  }
  
  // For regular objects, recursively serialize each property
  const serialized = {};
  for (const key in doc) {
    if (Object.prototype.hasOwnProperty.call(doc, key)) {
      serialized[key] = serializeMongoDBDocument(doc[key]);
    }
  }
  
  return serialized;
}

// Get user profile data
export async function getUserProfile() {
  try {
    const { userId } = auth();
    
    if (!userId) {
      throw new Error("User not authenticated");
    }
    
    await connectToDB();
    
    const user = await User.findOne({ clerkId: userId });
    
    if (!user) {
      throw new Error("User not found");
    }
    
    // Serialize the MongoDB document to a plain JavaScript object
    const serializedUser = serializeMongoDBDocument(user);
    
    return {
      success: true,
      data: serializedUser,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

// Update user profile data
export async function updateUserProfile(formData) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      throw new Error("User not authenticated");
    }
    
    await connectToDB();
    
    // Extract data from form data
    const bio = formData.get("bio") || "";
    const jobTitle = formData.get("jobTitle") || "";
    const skillsString = formData.get("skills") || "";
    const skills = skillsString ? skillsString.split(",").map(skill => skill.trim()) : [];
    const github = formData.get("github") || "";
    const linkedin = formData.get("linkedin") || "";
    const portfolio = formData.get("portfolio") || "";
    
    // Handle resume file or URL
    let resumeUrl = formData.get("resumeUrl") || "";
    const resumeFile = formData.get("resumeFile");
    
    // If a file was uploaded, process it
    if (resumeFile && resumeFile.size > 0) {
      try {
        const uploadResult = await uploadFile(resumeFile);
        resumeUrl = uploadResult.url;
      } catch (error) {
        console.error("Error uploading resume:", error);
        // Don't throw an error here, just log it and continue with existing URL
        // This prevents the entire form submission from failing
      }
    } else if (resumeUrl) {
      // Simple URL validation if a URL was provided
      try {
        // Check if it's a valid URL format
        new URL(resumeUrl);
      } catch (e) {
        console.warn("Invalid resume URL format:", resumeUrl);
        // If invalid URL format, clear it to prevent issues
        resumeUrl = "";
      }
    }
    
    const experience = parseInt(formData.get("experience") || "0", 10);
    
    // Job preferences
    const remoteOnly = formData.get("remoteOnly") === "on";
    const expectedSalary = formData.get("expectedSalary") || "";
    const jobType = formData.get("jobType") || "";
    const location = formData.get("location") || "";
    
    // Education - For simplicity, we're handling a single education entry
    // In a production app, you might handle multiple entries with unique IDs
    const institution = formData.get("institution") || "";
    const degree = formData.get("degree") || "";
    const fieldOfStudy = formData.get("fieldOfStudy") || "";
    const startYear = parseInt(formData.get("startYear") || "0", 10);
    const endYear = parseInt(formData.get("endYear") || "0", 10);
    
    const education = [];
    if (institution && degree) {
      education.push({
        institution,
        degree,
        fieldOfStudy,
        startYear,
        endYear,
      });
    }
    
    // Update user profile
    const updatedUser = await User.findOneAndUpdate(
      { clerkId: userId },
      {
        $set: {
          bio,
          skills,
          resumeUrl,
          github,
          linkedin,
          portfolio,
          jobTitle,
          experience,
          jobPreferences: {
            remoteOnly,
            expectedSalary,
            jobType,
            location,
          },
          // For education, use $set if updating a single entry,
          // otherwise for multiple entries you'll need a different approach
          education,
        },
      },
      { new: true }
    );
    
    if (!updatedUser) {
      throw new Error("User not found");
    }
    
    // Serialize the MongoDB document to a plain JavaScript object
    const serializedUser = serializeMongoDBDocument(updatedUser);
    
    return {
      success: true,
      data: serializedUser,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
} 