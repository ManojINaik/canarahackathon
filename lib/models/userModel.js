import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    default: "",
  },
  skills: {
    type: [String],
    default: [],
  },
  resumeUrl: {
    type: String,
    default: "",
  },
  github: {
    type: String,
    default: "",
  },
  linkedin: {
    type: String,
    default: "",
  },
  portfolio: {
    type: String,
    default: "",
  },
  jobTitle: {
    type: String,
    default: "",
  },
  experience: {
    type: Number,
    default: 0,
  },
  education: [{
    institution: String,
    degree: String,
    fieldOfStudy: String,
    startYear: Number,
    endYear: Number,
  }],
  jobPreferences: {
    remoteOnly: {
      type: Boolean,
      default: false,
    },
    expectedSalary: {
      type: String,
      default: "",
    },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Freelance", "Internship", ""],
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { collection: 'users' });

// Reset the model cache to ensure fresh connection
mongoose.models = {};

const User = mongoose.model("User", userSchema);

export default User;