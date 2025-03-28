"use client";

import { useUser } from "@clerk/nextjs"; // Import useUser from Clerk
import {
  Bot,
  ChevronRight,
  Code2,
  Globe2,
  GraduationCap,
  MessageSquare,
  Scale,
  Terminal,
  Users,
  Youtube,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const slideInLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const slideInRight = {
  hidden: { x: 60, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      variants={scaleUp}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6 relative overflow-hidden group">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.2, rotate: 5 }}
        />
        <motion.div whileHover={{ scale: 1.1 }}>{icon}</motion.div>
      </div>
      <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-700">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}

function SDGCard({ icon, number, title, description }) {
  return (
    <motion.div 
      variants={fadeIn}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      className="bg-white p-6 md:p-10 rounded-xl shadow-md transition-all duration-300 border border-gray-200 relative overflow-hidden"
    >
      <motion.div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 z-0" 
        whileHover={{ scale: 1.2 }}
      />
      <div className="flex flex-col sm:flex-row sm:items-center mb-6 relative z-10">
        <motion.div 
          whileHover={{ rotate: 5, scale: 1.05 }}
          className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4 sm:mb-0 sm:mr-6"
        >
          {icon}
        </motion.div>
        <div>
          <motion.div 
            className="text-sm text-indigo-600 font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            SDG {number}
          </motion.div>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-600">{title}</h3>
        </div>
      </div>
      <p className="text-gray-700 relative z-10">{description}</p>
    </motion.div>
  );
}

const LandingPage = () => {
  const { isSignedIn, isLoaded } = useUser(); // Access user authentication state
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // While the user state is loading, you might want to show a loader or nothing
  if (!isLoaded) {
    return null; // Or a loader component
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header and Navigation */}
      <header className="relative overflow-hidden">
        <nav className="fixed top-0 w-full z-20 backdrop-blur-md bg-white/80 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2 sm:space-x-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur-sm opacity-70"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.3, 0.7],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div
                  animate={{ 
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="relative"
                >
                  <Terminal className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600" />
                </motion.div>
              </div>
              <motion.span 
                className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                codeSync
              </motion.span>
            </motion.div>

            {/* Hamburger Menu Button (Visible on Mobile) */}
            <motion.button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>

            {/* Desktop Navigation Links (Hidden on Mobile) */}
            <motion.div 
              className="hidden md:flex space-x-6 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="#features"
                  className="text-lg text-gray-600 hover:text-indigo-600 transition-colors relative hover-underline-animation"
                >
                  Features
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="#mission"
                  className="text-lg text-gray-600 hover:text-indigo-600 transition-colors relative hover-underline-animation"
                >
                  Mission
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="#"
                  className="text-lg text-gray-600 hover:text-indigo-600 transition-colors relative hover-underline-animation"
                >
                  
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
                  <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold transition-all shadow-md hover:shadow-indigo-500/25 relative overflow-hidden group">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 to-indigo-600 bg-[length:200%_100%] animate-shimmer"></span>
                    <span className="relative z-10">Get Started</span>
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Navigation Links (Visible on Mobile Only) */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="md:hidden bg-white shadow-md"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex flex-col space-y-4 px-4 py-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeIn}>
                    <Link
                      href="#features"
                      className="text-lg text-gray-600 hover:text-indigo-600 transition-colors block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Features
                    </Link>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Link
                      href="#mission"
                      className="text-lg text-gray-600 hover:text-indigo-600 transition-colors block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Mission
                    </Link>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Link
                      href="#"
                      className="text-lg text-gray-600 hover:text-indigo-600 transition-colors block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      
                    </Link>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Link
                      href={isSignedIn ? "/dashboard" : "/sign-in"}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition-colors w-full">
                        Get Started
                      </button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl -mr-24 -mt-24 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl -mb-24 -ml-24 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          
          {/* Hero content */}
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              <motion.div 
                className="md:w-1/2" 
                initial="hidden"
                animate="visible"
                variants={slideInLeft}
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative"
                >
                  <span className="relative">
                    Empowering Future
                    <motion.span 
                      className="absolute -top-4 -right-6 text-yellow-400"
                      animate={{ 
                        rotate: [0, 20, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <Sparkles className="h-8 w-8" />
                    </motion.span>
                  </span>
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600"> Tech Leaders</span> in
                  <br />
                  India
                </motion.h1>
                <motion.p 
                  className="text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto md:mx-0 px-4"
                  variants={fadeIn}
                >
                  Bridge the digital divide with our unified learning platform.
                  Making coding education accessible, collaborative, and
                  empowering for everyone.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeIn}>
                    <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
                      <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center w-full sm:w-auto group relative overflow-hidden">
                        <span className="absolute inset-0 animate-shimmer"></span>
                        <span className="relative z-10">Start Learning</span>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10 ml-3"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </motion.div>
                      </button>
                    </Link>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <Link href={isSignedIn ? "/ai-assistant" : "/sign-in"}>
                      <button className="bg-white text-indigo-700 border border-indigo-100 px-10 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10 flex items-center justify-center w-full sm:w-auto group">
                        <motion.div 
                          animate={{ 
                            rotate: [0, 10, 0, -10, 0],
                          }}
                          transition={{ 
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                          className="mr-3"
                        >
                          <Bot className="h-5 w-5" />
                        </motion.div>
                        <span>Try AI Assistant</span>
                        <motion.div
                          initial={{ opacity: 0, x: -5 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-2"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="md:w-1/2 mt-8 md:mt-0"
                initial="hidden"
                animate="visible"
                variants={slideInRight}
              >
                <div className="relative">
                  <motion.div 
                    className="absolute -z-10 -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur-xl opacity-30 animate-pulse-slow"
                    animate={{ 
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <div className="relative z-10 rounded-2xl overflow-hidden animate-float">
                    <motion.img
                      src="/hero.png"
                      alt="hero"
                      width={1000}
                      height={1000}
                      className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/30"></div>
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-8 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
              <motion.div 
                className="text-center relative"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white -z-10 rounded-xl opacity-60"></div>
                <motion.div 
                  className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  7.5K+
                </motion.div>
                <div className="text-lg text-gray-700 font-medium">Yearly IT Demand</div>
              </motion.div>
              <motion.div 
                className="text-center relative"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white -z-10 rounded-xl opacity-60"></div>
                <motion.div 
                  className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  70%
                </motion.div>
                <div className="text-lg text-gray-700 font-medium">Rural Students</div>
              </motion.div>
              <motion.div 
                className="text-center relative"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white -z-10 rounded-xl opacity-60"></div>
                <motion.div 
                  className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  24/7
                </motion.div>
                <div className="text-lg text-gray-700 font-medium">AI Code Mentoring</div>
              </motion.div>
              <motion.div 
                className="text-center relative"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white -z-10 rounded-xl opacity-60"></div>
                <motion.div 
                  className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600" 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  100%
                </motion.div>
                <div className="text-lg text-gray-700 font-medium">Free Access</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-16 sm:py-24 bg-gradient-to-b from-indigo-50/40 to-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 -mr-24 -mt-24"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 -mb-24 -ml-24"></div>
          
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-center mb-4"
              variants={fadeIn}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                Platform Features
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 text-center max-w-3xl mx-auto mb-12 sm:mb-20"
              variants={fadeIn}
            >
              Everything you need to learn coding, collaborate with peers, and build your tech career
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <FeatureCard
                icon={<Bot className="h-8 w-8" />}
                title="AI Coding Assistant"
                description="Get instant help with coding problems using our AI assistant powered by advanced language models. Perfect for debugging, learning new concepts, and getting code examples."
              />
              <FeatureCard
                icon={<Youtube className="h-8 w-8" />}
                title="Learn Page"
                description="Access curated video tutorials from top educators. Track your progress and learn at your own pace with our comprehensive learning paths."
              />
              <FeatureCard
                icon={<Code2 className="h-8 w-8" />}
                title="Playground"
                description="Real-time collaborative IDE for pair programming and mentoring sessions."
              />
              <FeatureCard
                icon={<MessageSquare className="h-8 w-8" />}
                title="DevDiscuss"
                description="Community-driven Q&A platform for peer learning and knowledge sharing."
              />
              <FeatureCard
                icon={<Users className="h-8 w-8" />}
                title="Collaborative Learning"
                description="Learn together with peers and mentors in a supportive environment."
              />
              <FeatureCard
                icon={<Globe2 className="h-8 w-8" />}
                title="Accessible Education"
                description="Breaking barriers to provide quality education for all, anywhere."
              />
            </motion.div>
          </motion.div>
        </div>

        {/* AI Assistant Highlight Section */}
        <div className="py-16 sm:py-24 bg-white overflow-hidden relative">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-indigo-50/40 z-0"></div>
          
          {/* Blob animation already in the component */}
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <motion.div 
                className="lg:w-1/2 order-2 lg:order-1"
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="relative">
                  {/* Animated blobs */}
                  <div className="absolute -z-10 top-0 left-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  
                  <motion.div 
                    className="relative shadow-2xl rounded-2xl overflow-hidden border border-gray-200"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 flex items-center">
                      <motion.div 
                        animate={{ 
                          rotate: [0, 10, 0, -10, 0],
                        }}
                        transition={{ 
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      >
                        <Bot className="h-6 w-6 text-white mr-3" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">AI Coding Assistant</h3>
                    </div>
                    <div className="bg-white p-6">
                      <motion.div 
                        className="flex justify-end mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="bg-indigo-600 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
                          <p className="text-sm">How do I implement authentication with NextAuth.js?</p>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex justify-start mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                          <p className="text-sm mb-2">Here's how you can implement authentication with NextAuth.js:</p>
                          <motion.div 
                            className="bg-gray-800 text-gray-200 rounded-md p-3 text-xs font-mono"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.2 }}
                          >
                            <pre>npm install next-auth</pre>
                          </motion.div>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.5 }}
                      >
                        <div className="animate-pulse flex space-x-2">
                          <div className="rounded-full bg-gray-300 h-3 w-3"></div>
                          <div className="rounded-full bg-gray-300 h-3 w-3"></div>
                          <div className="rounded-full bg-gray-300 h-3 w-3"></div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left"
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h2 
                  className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                    AI-Powered Coding Assistance
                  </span>
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Get instant help with your coding questions, debugging issues, and learn new programming concepts with our advanced AI assistant.
                </motion.p>
                <motion.ul 
                  className="mb-8 space-y-4 text-left max-w-xl mx-auto lg:mx-0"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.li className="flex items-start" variants={fadeIn}>
                    <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">✓</div>
                    <p className="text-gray-700">Real-time code explanations and examples</p>
                  </motion.li>
                  <motion.li className="flex items-start" variants={fadeIn}>
                    <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">✓</div>
                    <p className="text-gray-700">Debugging assistance with step-by-step solutions</p>
                  </motion.li>
                  <motion.li className="flex items-start" variants={fadeIn}>
                    <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">✓</div>
                    <p className="text-gray-700">Syntax highlighting for better code readability</p>
                  </motion.li>
                  <motion.li className="flex items-start" variants={fadeIn}>
                    <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-3">✓</div>
                    <p className="text-gray-700">Available 24/7 for continuous learning support</p>
                  </motion.li>
                </motion.ul>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link href={isSignedIn ? "/ai-assistant" : "/sign-in"}>
                    <motion.button 
                      className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 inline-flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Try AI Assistant 
                      <motion.div 
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          repeatType: "loop" 
                        }}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </motion.div>
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/*  Section */}
        <div id="ai" className="py-16 sm:py-24 bg-gradient-to-b from-white to-indigo-50/20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
          
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-center mb-4"
              variants={fadeIn}
            >
              Supporting India
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                's Sustainable Development Goals
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 text-center max-w-3xl mx-auto mb-12 sm:mb-20"
              variants={fadeIn}
            >
              Our platform contributes to the UN Sustainable Development Goals through quality education and reducing inequalities
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SDGCard
                icon={<GraduationCap className="h-8 w-8" />}
                number="4"
                title="Quality Education"
                description="Providing accessible, high-quality coding education to bridge the digital skills gap."
              />
              <SDGCard
                icon={<Scale className="h-8 w-8" />}
                number="10"
                title="Reduced Inequalities"
                description="Breaking down barriers between urban and rural educational opportunities."
              />
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 z-0"></div>
          
          {/* Animated shapes */}
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"
            animate={{ 
              y: [0, 50, 0],
              rotate: [0, 45, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, -30, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
          
          <motion.div 
            className="max-w-7xl mx-auto px-8 text-center relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl font-bold text-white mb-8 drop-shadow-lg"
              variants={fadeIn}
            >
              Ready to Start Your Coding Journey?
            </motion.h2>
            <motion.p 
              className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Join thousands of learners who are transforming their lives
              through code.
            </motion.p>
            <motion.div
              variants={scaleUp}
            >
              <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
                <motion.button 
                  className="bg-white text-indigo-600 px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-indigo-500/40"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Now - It's Free
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
          
          {/* Animated glow */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 8,
              delay: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <h3 className="text-white font-semibold text-xl mb-6">
                  Platform
                </h3>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="/features" className="hover:text-white text-lg hover:text-indigo-300 transition-colors">
                      Features
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="/tutorials" className="hover:text-white text-lg hover:text-indigo-300 transition-colors">
                      Tutorials
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="/pricing" className="hover:text-white text-lg hover:text-indigo-300 transition-colors">
                      Pricing
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
              <motion.div variants={fadeIn}>
                <h3 className="text-white font-semibold text-xl mb-6">
                  Community
                </h3>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="/devdiscuss" className="hover:text-white text-lg hover:text-indigo-300 transition-colors">
                      DevDiscuss
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="/blog" className="hover:text-white text-lg hover:text-indigo-300 transition-colors">
                      Blog
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="/forums" className="hover:text-white text-lg hover:text-indigo-300 transition-colors">
                      Forums
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
              <motion.div variants={fadeIn}>
                <h3 className="text-white font-semibold text-xl mb-6">
                  Company
                </h3>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="/about" className="hover:text-white text-lg hover:text-indigo-300 transition-colors">
                      About
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="/careers" className="hover:text-white text-lg hover:text-indigo-300 transition-colors">
                      Careers
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="/contact" className="hover:text-white text-lg hover:text-indigo-300 transition-colors">
                      Contact
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
              <motion.div variants={fadeIn}>
                <h3 className="text-white font-semibold text-xl mb-6">Legal</h3>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="/privacy" className="hover:text-white text-lg hover:text-indigo-300 transition-colors">
                      Privacy
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="/terms" className="hover:text-white text-lg hover:text-indigo-300 transition-colors">
                      Terms
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link href="/cookie-policy" className="hover:text-white text-lg hover:text-indigo-300 transition-colors">
                      Cookie Policy
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
            <motion.div 
              className="border-t border-gray-800 mt-16 pt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-lg">
                © {new Date().getFullYear()} codeSync. All rights reserved.
              </p>
              
              <motion.div 
                className="flex justify-center items-center mt-6 space-x-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ y: -3, color: "#FFFFFF" }}
                  variants={fadeIn}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ y: -3, color: "#1DA1F2" }}
                  variants={fadeIn}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ y: -3, color: "#0A66C2" }}
                  variants={fadeIn}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </footer>
      </header>
    </div>
  );
};

export default LandingPage;
