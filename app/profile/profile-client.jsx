"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaGlobe, FaBriefcase, FaCalendarAlt, FaGraduationCap, FaMapMarkerAlt, FaDollarSign, FaFileAlt, FaCode } from "react-icons/fa";
import ProfileForm from "./components/ProfileForm";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-500/20 to-transparent"></div>
      
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-indigo-500/10 to-blue-500/10 blur-3xl"
          initial={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0.1
          }}
          animate={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }}
        />
      ))}
    </div>
  );
};

export const ProfileHeader = ({ user }) => {
  const headerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the profile picture and name on load
      gsap.fromTo(
        ".profile-pic-container",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" }
      );
      
      gsap.fromTo(
        ".profile-info",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: "power2.out" }
      );
    }, headerRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <motion.div
      ref={headerRef}
      className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl overflow-hidden shadow-md mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="profile-pic-container bg-white p-1 rounded-full shadow-lg">
          <img 
            src={user?.imageUrl || "https://via.placeholder.com/150"} 
            alt="Profile" 
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <div className="profile-info text-center md:text-left">
          <h1 className="text-3xl font-bold">{user?.name || "Profile Name"}</h1>
          <p className="text-blue-100 text-xl mb-4">{user?.jobTitle || "Professional Title"}</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
            {user?.github && (
              <a href={user.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <FaGithub /> GitHub
              </a>
            )}
            {user?.linkedin && (
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <FaLinkedin /> LinkedIn
              </a>
            )}
            {user?.portfolio && (
              <a href={user.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <FaGlobe /> Portfolio
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProfileBio = ({ user }) => {
  const bioRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bioRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bioRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, bioRef);
    
    return () => ctx.revert();
  }, []);
  
  const skills = user?.skills || [];
  
  return (
    <motion.div
      ref={bioRef}
      className="bg-white rounded-xl shadow-md p-6 mb-8 backdrop-blur-sm bg-white/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">About Me</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">{user?.bio || "No bio available yet."}</p>
      
      {skills.length > 0 && (
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(99, 102, 241, 0.2)"
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export const ProfileDetails = ({ user }) => {
  const detailsRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".detail-card",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: detailsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, detailsRef);
    
    return () => ctx.revert();
  }, []);
  
  const jobPreferences = user?.jobPreferences || {};
  const education = user?.education?.[0] || {};
  
  return (
    <div ref={detailsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <motion.div
        className="detail-card bg-white rounded-xl shadow-md p-6 backdrop-blur-sm bg-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ 
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2 flex items-center">
          <FaBriefcase className="mr-2 text-indigo-600" /> Experience
        </h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <FaCalendarAlt />
              </span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Years of Experience</h3>
              <p className="text-gray-600">{user?.experience || 0} years</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <FaCode />
              </span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Job Title</h3>
              <p className="text-gray-600">{user?.jobTitle || "Not specified"}</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="detail-card bg-white rounded-xl shadow-md p-6 backdrop-blur-sm bg-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileHover={{ 
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2 flex items-center">
          <FaGraduationCap className="mr-2 text-indigo-600" /> Education
        </h2>
        {education?.institution ? (
          <div className="space-y-2">
            <h3 className="font-medium text-gray-800">{education.institution}</h3>
            <p className="text-gray-600">{education.degree}{education.fieldOfStudy ? `, ${education.fieldOfStudy}` : ''}</p>
            {education.startYear && education.endYear && (
              <p className="text-gray-500">{education.startYear} - {education.endYear}</p>
            )}
          </div>
        ) : (
          <p className="text-gray-600">No education details provided</p>
        )}
      </motion.div>
      
      <motion.div
        className="detail-card bg-white rounded-xl shadow-md p-6 md:col-span-2 backdrop-blur-sm bg-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ 
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2 flex items-center">
          <FaBriefcase className="mr-2 text-indigo-600" /> Job Preferences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <FaMapMarkerAlt />
              </span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Location</h3>
              <p className="text-gray-600">
                {jobPreferences?.location || "Not specified"}
                {jobPreferences?.remoteOnly && " (Remote Only)"}
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <FaDollarSign />
              </span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Expected Salary</h3>
              <p className="text-gray-600">{jobPreferences?.expectedSalary || "Not specified"}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <FaBriefcase />
              </span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Job Type</h3>
              <p className="text-gray-600">{jobPreferences?.jobType || "Not specified"}</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {user?.resumeUrl && (
        <motion.div
          className="detail-card bg-white rounded-xl shadow-md p-6 md:col-span-2 backdrop-blur-sm bg-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ 
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2 flex items-center">
            <FaFileAlt className="mr-2 text-indigo-600" /> Resume
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">View or download your resume</p>
            <a
              href={user.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <FaFileAlt className="mr-2" /> View Resume
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const ProfileContent = ({ userData }) => {
  const mainRef = useRef(null);
  const [activeTab, setActiveTab] = useState("view");
  
  return (
    <div ref={mainRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 relative">
      <AnimatedBackground />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="tabs flex space-x-2 mb-8">
          <button
            onClick={() => setActiveTab("view")}
            className={`px-6 py-2 rounded-t-lg text-lg font-medium transition-colors ${
              activeTab === "view" 
                ? "bg-white text-indigo-600 shadow-sm" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            View Profile
          </button>
          <button
            onClick={() => setActiveTab("edit")}
            className={`px-6 py-2 rounded-t-lg text-lg font-medium transition-colors ${
              activeTab === "edit" 
                ? "bg-white text-indigo-600 shadow-sm" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Edit Profile
          </button>
        </div>
        
        {activeTab === "view" ? (
          <>
            <ProfileHeader user={userData} />
            <ProfileBio user={userData} />
            <ProfileDetails user={userData} />
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-6 backdrop-blur-sm bg-white/80">
            <ProfileForm />
          </div>
        )}
      </div>
    </div>
  );
}; 