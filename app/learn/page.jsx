"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, BookOpen, Clock, Video, ExternalLink, TrendingUp, Code } from "lucide-react";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_IDS = [
  "UC8butISFwT-Wl7EV0hUK0BQ", // freeCodeCamp.org
  "UC59K-uG2A5ogwIrHw4bmlEg", // Telusko Learnings
];

// Categories for the filter tabs
const CATEGORIES = [
  { id: "all", name: "All Videos", icon: Video },
  { id: "javascript", name: "JavaScript", icon: Code },
  { id: "react", name: "React", icon: Code },
  { id: "python", name: "Python", icon: Code },
  { id: "trending", name: "Trending", icon: TrendingUp },
];

// Sample mock data for fallback when API fails
const MOCK_VIDEOS = [
  {
    id: { videoId: "mock-video-1" },
    snippet: {
      title: "Introduction to JavaScript Programming",
      description: "Learn the basics of JavaScript programming language in this comprehensive tutorial.",
      thumbnails: {
        high: { url: "https://via.placeholder.com/480x360/4F46E5/FFFFFF?text=JavaScript+Tutorial" }
      },
      publishedAt: new Date().toISOString(),
      channelTitle: "Code Learning Channel"
    }
  },
  {
    id: { videoId: "mock-video-2" },
    snippet: {
      title: "React Hooks Complete Guide",
      description: "Master React Hooks with this step by step tutorial for beginners and advanced developers.",
      thumbnails: {
        high: { url: "https://via.placeholder.com/480x360/3B82F6/FFFFFF?text=React+Hooks" }
      },
      publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      channelTitle: "React Masters"
    }
  },
  {
    id: { videoId: "mock-video-3" },
    snippet: {
      title: "Python for Data Science",
      description: "Learn how to use Python for data analysis, visualization and machine learning.",
      thumbnails: {
        high: { url: "https://via.placeholder.com/480x360/10B981/FFFFFF?text=Python+Tutorial" }
      },
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      channelTitle: "Data Science Pro"
    }
  }
];

const LearnPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const router = useRouter();
  const [apiError, setApiError] = useState(null);
  const [useMockData, setUseMockData] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  // Add this helper function to ensure we have valid video objects
  const validateVideo = (video) => {
    // Check if video object has the expected structure
    if (!video || !video.id || !video.id.videoId || !video.snippet) {
      console.warn("Invalid video object structure:", video);
      return false;
    }
    
    // Check for required properties
    if (!video.snippet.title || !video.snippet.thumbnails) {
      console.warn("Missing required properties in video:", video);
      return false;
    }
    
    return true;
  };

  const fetchVideos = async () => {
    setIsLoading(true);
    setApiError(null);
    
    // If using mock data, skip the API call
    if (useMockData) {
      setTimeout(() => {
        setVideos(MOCK_VIDEOS);
        setIsLoading(false);
      }, 1000); // Simulate network delay
      return;
    }
    
    try {
      if (!API_KEY) {
        throw new Error("YouTube API key is missing");
      }
      
      const promises = CHANNEL_IDS.map((channelId) =>
        axios.get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: "snippet",
            channelId: channelId,
            maxResults: 10,
            order: "date",
            key: API_KEY,
          },
        })
      );
      const results = await Promise.all(promises);
      const allVideos = results.flatMap((result) => result.data.items);
      console.log("API Response:", results);
      console.log("Processed Videos:", allVideos);
      
      // Filter out invalid videos
      const validVideos = allVideos.filter(validateVideo);
      
      if (validVideos.length === 0) {
        console.warn("No valid videos found in the API response");
        if (allVideos.length > 0) {
          console.warn("Some videos were found but had invalid structure");
        }
      }
      
      setVideos(validVideos || []);
    } catch (error) {
      console.error("Error fetching videos", error);
      setApiError(error.message || "Failed to load videos");
      if (error.response) {
        console.error("API Error Response:", error.response.data);
        setApiError(`API Error: ${error.response.data?.error?.message || error.response.status}`);
      }
      console.log("Would you like to use mock data instead? Set useMockData to true");
    } finally {
      setIsLoading(false);
    }
  };
 
  const fetchVideosBySearch = async () => {
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    setApiError(null);
    try {
      if (!API_KEY) {
        throw new Error("YouTube API key is missing");
      }
      
      const promises = CHANNEL_IDS.map((channelId) =>
        axios.get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: "snippet",
            channelId: channelId,
            maxResults: 10,
            order: "relevance",
            q: searchTerm,
            key: API_KEY,
          },
        })
      );
      const results = await Promise.all(promises);
      const allVideos = results.flatMap((result) => result.data.items);
      console.log("Search API Response:", results);
      console.log("Processed Search Videos:", allVideos);
      
      // Filter out invalid videos
      const validVideos = allVideos.filter(validateVideo);
      
      if (validVideos.length === 0) {
        console.warn("No valid videos found in search results");
        if (allVideos.length > 0) {
          console.warn("Some videos were found but had invalid structure");
        }
      }
      
      setVideos(validVideos || []);
    } catch (error) {
      console.error("Error fetching videos by search", error);
      setApiError(error.message || "Failed to search videos");
      if (error.response) {
        console.error("API Error Response:", error.response.data);
        setApiError(`API Error: ${error.response.data?.error?.message || error.response.status}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchVideosBySearch();
    }
  };
  
  // Filter videos based on category
  const filterVideosByCategory = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      // No filtering needed
      return;
    }
    
    // We'd search for this category (in a real app you'd implement proper filtering)
    setSearchTerm(category);
    fetchVideosBySearch();
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  // Format video publication date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-10">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12 shadow-md relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.1)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
          
          {/* Background decorative element */}
          <motion.div 
            className="absolute right-0 bottom-0 w-96 h-96 bg-white opacity-10 rounded-full"
            style={{ x: 100, y: 100 }}
            animate={{ 
              x: [100, 120, 100],
              y: [100, 110, 100],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center mb-2"
              >
                <BookOpen className="mr-2 h-6 w-6" />
                <h1 className="text-3xl font-bold">Learning Center</h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-blue-100"
              >
                Discover coding tutorials and improve your skills
              </motion.p>
            </div>
            
            <motion.div
              className={`relative flex items-center transition-all duration-300 w-full md:w-auto ${isSearchFocused ? 'md:w-80' : 'md:w-64'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Search className="absolute left-3 text-white/70 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="bg-white/20 text-white placeholder-white/70 px-10 py-2 rounded-full w-full outline-none focus:bg-white/30 transition-all duration-300 border border-white/30"
              />
              <motion.button 
                onClick={fetchVideosBySearch}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 bg-white/20 hover:bg-white/30 text-white p-1.5 rounded-full"
              >
                <Search className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.header>
      
      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-7xl mx-auto px-4 mt-6"
      >
        <div className="bg-white rounded-xl shadow-sm p-2 overflow-x-auto">
          <div className="flex space-x-2">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => filterVideosByCategory(category.id)}
                  className={`px-4 py-2 rounded-lg flex items-center whitespace-nowrap ${
                    isActive 
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  <span>{category.name}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-lg -z-10"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
      
      {/* Video Grid */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 mt-8"
      >
        {isLoading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm h-72 animate-pulse">
                <div className="h-40 bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : apiError ? (
          // API Error State
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 px-4"
          >
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 inline-block mx-auto max-w-xl">
              <h3 className="text-xl font-bold text-red-700 mb-2">Unable to load videos</h3>
              <p className="text-red-600 mb-4">{apiError}</p>
              <p className="text-gray-600 mb-4">
                This might be due to an API key issue or connectivity problem. Please check the console for more details.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  onClick={() => fetchVideos()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Try Again
                </motion.button>
                <motion.button
                  onClick={() => {
                    setUseMockData(true);
                    fetchVideos();
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Use Sample Data
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : videos.length === 0 ? (
          // No videos found
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No videos found</h3>
            <p className="text-gray-500 mb-4">Try a different search term or category</p>
            {searchTerm && (
              <motion.button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                  fetchVideos();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center"
              >
                Show All Videos
              </motion.button>
            )}
          </motion.div>
        ) : (
          // Video grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video?.id?.videoId || `video-${index}`}
                variants={itemVariants}
                whileHover="hover"
                onClick={() => video?.id?.videoId && router.push(`/learn/${video.id.videoId}`)}
                className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer relative group"
              >
                <div className="relative overflow-hidden">
                  {video?.snippet?.thumbnails?.high?.url || video?.snippet?.thumbnails?.medium?.url ? (
                    <img
                      src={video.snippet.thumbnails.high?.url || video.snippet.thumbnails.medium?.url}
                      alt={video.snippet?.title || "Video thumbnail"}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                      <Video className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{formatDate(video?.snippet?.publishedAt || new Date())}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {video?.snippet?.title || "Untitled Video"}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{video?.snippet?.channelTitle || "Unknown Channel"}</p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center text-indigo-600 text-sm font-medium"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span>Watch tutorial</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.main>
      
      {/* Decorative elements */}
      <div className="fixed -z-10 top-1/3 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="fixed -z-10 bottom-0 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default LearnPage;
