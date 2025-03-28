"use client";

import { motion } from "framer-motion";
import { HiTrendingUp } from "react-icons/hi";
import { FaCalendarAlt, FaClock, FaCode, FaLaptopCode, FaUserShield } from "react-icons/fa";
import { RiDiscussLine } from "react-icons/ri";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Animated activity card component
export const AnimatedActivityCard = () => {
  const cardRef = useRef(null);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle hover animation for the card
      gsap.to(cardRef.current, {
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        y: -5,
        duration: 0.3,
        paused: true,
        ease: "power2.out"
      }).pause();
    }, cardRef);
    
    return () => ctx.revert();
  }, []);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        duration: 0.8
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "80%",
      transition: { 
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut" 
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl shadow-sm overflow-hidden mb-10 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Your Activity</h3>
          <div className="flex items-center text-green-600 font-medium">
            <HiTrendingUp className="mr-1" />
            <span>12% increase</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <FaCode className="text-indigo-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Coding Hours</p>
              <p className="text-2xl font-bold text-gray-800">24.5</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-teal-100 p-3 rounded-lg">
              <FaCalendarAlt className="text-teal-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Days</p>
              <p className="text-2xl font-bold text-gray-800">18</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-rose-100 p-3 rounded-lg">
              <FaClock className="text-rose-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Latest Session</p>
              <p className="text-2xl font-bold text-gray-800">2h 15m</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-6 pb-6">
        <p className="text-sm text-gray-600 mb-2">Weekly Goal Progress (80%)</p>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            variants={progressVariants}
            initial="hidden"
            animate="visible"
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Dashboard content component with animations
export const DashboardContent = ({ userData, isAdmin }) => {
  const dashboardRef = useRef(null);
  const statsRef = useRef(null);
  
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    
    const ctx = gsap.context(() => {
      // Parallax effect for the dashboard cards on scroll
      const cards = document.querySelectorAll('.card-item');
      cards.forEach((card, index) => {
        gsap.fromTo(card, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            },
            delay: 0.1 * index
          }
        );
      });
      
      // Animate stats on scroll
      if (statsRef.current) {
        gsap.fromTo(statsRef.current.querySelectorAll('.stat-item'),
          { scale: 0.9, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            stagger: 0.1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, dashboardRef);
    
    return () => ctx.revert(); // Cleanup
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <div ref={dashboardRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center mb-10">
          <div className="bg-blue-600 h-12 w-1 rounded-full mr-4"></div>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, <span className="text-blue-600">{userData?.name || 'User'}</span>
          </h1>
        </div>
        
        {/* Activity Card */}
        <AnimatedActivityCard />
        
        <p className="text-gray-600 mb-8 max-w-2xl">
          Access all your tools and resources from this dashboard. Choose from the options below to get started.
        </p>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.a
            href="/playground"
            variants={itemVariants}
            whileHover="hover"
            className="card-item bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="bg-blue-50 p-4 rounded-lg inline-flex mb-4 group-hover:bg-blue-100 transition-colors duration-300">
              <FaLaptopCode size={30} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Playground</h3>
            <p className="text-gray-600">Experiment with code and explore new ideas.</p>
          </motion.a>
          
          <motion.a
            href="/dev-discuss"
            variants={itemVariants}
            whileHover="hover"
            className="card-item bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="bg-purple-50 p-4 rounded-lg inline-flex mb-4 group-hover:bg-purple-100 transition-colors duration-300">
              <RiDiscussLine size={30} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">DevDiscuss</h3>
            <p className="text-gray-600">Connect with other developers and share insights.</p>
          </motion.a>
          
          <motion.a
            href="/learn"
            variants={itemVariants}
            whileHover="hover"
            className="card-item bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="bg-green-50 p-4 rounded-lg inline-flex mb-4 group-hover:bg-green-100 transition-colors duration-300">
              <MdOutlineOndemandVideo size={30} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Learn</h3>
            <p className="text-gray-600">Access tutorials and educational content.</p>
          </motion.a>
          
          {isAdmin && (
            <motion.a
              href="/admin"
              variants={itemVariants}
              whileHover="hover"
              className="card-item bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="bg-amber-50 p-4 rounded-lg inline-flex mb-4 group-hover:bg-amber-100 transition-colors duration-300">
                <FaUserShield size={30} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Admin Panel</h3>
              <p className="text-gray-600">Manage system settings and user access.</p>
            </motion.a>
          )}
        </motion.div>
        
        <motion.div 
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-white p-6 rounded-xl shadow-sm"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="stat-item p-4 rounded-lg bg-blue-50">
              <p className="text-sm text-gray-600">Recent Projects</p>
              <p className="text-2xl font-bold text-blue-600">5</p>
            </div>
            <div className="stat-item p-4 rounded-lg bg-purple-50">
              <p className="text-sm text-gray-600">Discussions</p>
              <p className="text-2xl font-bold text-purple-600">12</p>
            </div>
            <div className="stat-item p-4 rounded-lg bg-green-50">
              <p className="text-sm text-gray-600">Courses Completed</p>
              <p className="text-2xl font-bold text-green-600">3</p>
            </div>
            <div className="stat-item p-4 rounded-lg bg-amber-50">
              <p className="text-sm text-gray-600">Achievements</p>
              <p className="text-2xl font-bold text-amber-600">7</p>
            </div>
          </div>
        </motion.div>
        
        {/* Additional animations for the dashboard footer */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-gray-500 text-sm"
          >
            <p className="mb-2">Need help? Visit our <a href="#" className="text-blue-600 hover:underline">help center</a></p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-8 mb-6"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}; 