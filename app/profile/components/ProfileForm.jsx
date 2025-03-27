"use client";

import { useEffect, useState, useRef } from "react";
import { getUserProfile, updateUserProfile } from "@/lib/actions/profileActions";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";
import { FaCloudUploadAlt, FaFile, FaTrash } from "react-icons/fa";

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? "Saving..." : "Save Profile"}
    </button>
  );
}

export default function ProfileForm() {
  const fileInputRef = useRef(null);
  const { isLoaded, user } = useUser();
  const [formData, setFormData] = useState({
    bio: "",
    skills: "",
    jobTitle: "",
    github: "",
    linkedin: "",
    portfolio: "",
    resumeUrl: "",
    experience: 0,
    remoteOnly: false,
    expectedSalary: "",
    jobType: "",
    location: "",
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startYear: "",
    endYear: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [fileUploadError, setFileUploadError] = useState("");
  const [resumeUrlError, setResumeUrlError] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      if (isLoaded && user) {
        try {
          setLoading(true);
          const response = await getUserProfile();
          
          if (response.success) {
            const userData = response.data;
            setFormData({
              bio: userData.bio || "",
              skills: userData.skills?.join(", ") || "",
              jobTitle: userData.jobTitle || "",
              github: userData.github || "",
              linkedin: userData.linkedin || "",
              portfolio: userData.portfolio || "",
              resumeUrl: userData.resumeUrl || "",
              experience: userData.experience || 0,
              remoteOnly: userData.jobPreferences?.remoteOnly || false,
              expectedSalary: userData.jobPreferences?.expectedSalary || "",
              jobType: userData.jobPreferences?.jobType || "",
              location: userData.jobPreferences?.location || "",
              institution: userData.education?.[0]?.institution || "",
              degree: userData.education?.[0]?.degree || "",
              fieldOfStudy: userData.education?.[0]?.fieldOfStudy || "",
              startYear: userData.education?.[0]?.startYear || "",
              endYear: userData.education?.[0]?.endYear || "",
            });
          } else {
            setError("Failed to load profile data");
          }
        } catch (err) {
          setError("Error loading profile data");
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    }
    
    fetchProfile();
  }, [isLoaded, user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Special handling for resumeUrl to validate URL format
    if (name === "resumeUrl" && value) {
      try {
        new URL(value); // Check if valid URL
        setResumeUrlError("");
      } catch (e) {
        setResumeUrlError("Please enter a valid URL (e.g., https://example.com/resume.pdf)");
      }
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (!file) return;
    
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      setFileUploadError("Please upload a PDF or Word document");
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setFileUploadError("File size must be less than 5MB");
      return;
    }
    
    setResumeFile(file);
    setFileUploadError("");
  };
  
  const handleRemoveFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent submission if there are validation errors
    if (resumeUrlError || fileUploadError) {
      toast.error("Please fix the validation errors before submitting");
      return;
    }
    
    setSaving(true);
    
    try {
      const formDataObj = new FormData();
      
      // Add all form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });
      
      // Add resume file if exists
      if (resumeFile) {
        formDataObj.append("resumeFile", resumeFile);
      }
      
      const response = await updateUserProfile(formDataObj);
      
      if (response.success) {
        toast.success("Profile updated successfully");
        
        // Update the resumeUrl in formData if it was updated
        if (response.data.resumeUrl && response.data.resumeUrl !== formData.resumeUrl) {
          setFormData(prev => ({
            ...prev,
            resumeUrl: response.data.resumeUrl
          }));
          
          // Clear the file input after successful upload
          setResumeFile(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        }
      } else {
        toast.error(response.error || "Failed to update profile");
      }
    } catch (err) {
      toast.error("Error updating profile");
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center py-8">Loading profile data...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Senior Software Engineer"
            />
          </div>
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
              Years of Experience
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              min="0"
              max="50"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
            Professional Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Tell us about yourself and your professional experience..."
          ></textarea>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Skills</h2>
        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
            Skills (comma separated)
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="JavaScript, React, Node.js, MongoDB"
          />
          <p className="text-sm text-gray-500 mt-1">Separate each skill with a comma</p>
        </div>
      </div>

      {/* Links */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Online Presence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">
              GitHub Profile
            </label>
            <input
              type="url"
              id="github"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://github.com/yourusername"
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://linkedin.com/in/yourusername"
            />
          </div>
          <div>
            <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
              Portfolio Website
            </label>
            <input
              type="url"
              id="portfolio"
              name="portfolio Link"
              value={formData.portfolio}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://yourportfolio.com"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="resumeUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Resume URL
            </label>
            <input
              type="url"
              id="resumeUrl"
              name="resumeUrl"
              value={formData.resumeUrl}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${resumeUrlError ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="https://drive.google.com/your-resume"
            />
            {resumeUrlError ? (
              <p className="text-xs text-red-600 mt-1">{resumeUrlError}</p>
            ) : (
              <p className="text-xs text-gray-500 mt-1">If you have an existing resume link, paste it above</p>
            )}
          </div>
        </div>
        
        {/* Resume File Upload */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Resume
          </label>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-center w-full">
              <label 
                htmlFor="resumeFile" 
                className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer
                  ${resumeFile ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:bg-gray-50'}`}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {resumeFile ? (
                    <>
                      <FaFile className="w-8 h-8 mb-2 text-indigo-600" />
                      <p className="text-sm text-gray-700">{resumeFile.name}</p>
                      <p className="text-xs text-gray-500">
                        {Math.round(resumeFile.size / 1024)} KB
                      </p>
                    </>
                  ) : (
                    <>
                      <FaCloudUploadAlt className="w-10 h-10 mb-2 text-gray-400" />
                      <p className="mb-1 text-sm text-gray-500">
                        <span className="font-medium">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PDF or Word (Max 5MB)</p>
                    </>
                  )}
                </div>
                <input
                  id="resumeFile"
                  name="resumeFile"
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
              </label>
            </div>
            
            {resumeFile && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="flex items-center text-sm text-red-600 hover:text-red-800"
                >
                  <FaTrash className="mr-1" /> Remove
                </button>
              </div>
            )}
            
            {fileUploadError && (
              <p className="text-sm text-red-600 mt-1">{fileUploadError}</p>
            )}
            
            <p className="text-xs text-gray-500 mt-1">
              Upload your resume directly or provide a URL above. PDF or Word documents accepted.
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
              Institution
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Harvard University"
            />
          </div>
          <div>
            <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">
              Degree
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Bachelor of Science"
            />
          </div>
          <div>
            <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700 mb-1">
              Field of Study
            </label>
            <input
              type="text"
              id="fieldOfStudy"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Computer Science"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="startYear" className="block text-sm font-medium text-gray-700 mb-1">
                Start Year
              </label>
              <input
                type="number"
                id="startYear"
                name="startYear"
                value={formData.startYear}
                onChange={handleChange}
                min="1950"
                max="2030"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="2018"
              />
            </div>
            <div>
              <label htmlFor="endYear" className="block text-sm font-medium text-gray-700 mb-1">
                End Year
              </label>
              <input
                type="number"
                id="endYear"
                name="endYear"
                value={formData.endYear}
                onChange={handleChange}
                min="1950"
                max="2030"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="2022"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Job Preferences */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Job Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">
              Job Type
            </label>
            <select
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div>
            <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-1">
              Expected Salary Range
            </label>
            <input
              type="text"
              id="expectedSalary"
              name="expectedSalary"
              value={formData.expectedSalary}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="$80,000 - $100,000"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="San Francisco, CA"
            />
          </div>
          <div className="flex items-center h-full pt-6">
            <input
              type="checkbox"
              id="remoteOnly"
              name="remoteOnly"
              checked={formData.remoteOnly}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="remoteOnly" className="ml-2 block text-sm font-medium text-gray-700">
              Remote Only
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={saving}
          className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {saving ? "Saving..." : "Save Profile"}
        </button>
      </div>
    </form>
  );
} 