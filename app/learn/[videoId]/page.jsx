"use client";
import React, { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import CodeEditor from "@/components/ui/CodeEditor";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Copy, Share2, BookOpen, ChevronDown, ChevronUp, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

const VideoPage = ({ params }) => {
  const { videoId } = params;
  const router = useRouter();
  const [videoDetails, setVideoDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showPanel, setShowPanel] = useState(true);
  
  useEffect(() => {
    fetchVideoDetails();
    
    const resizer = document.querySelector(".cursor-ew-resize");
    if (!resizer) return;
    
    const leftPanel = resizer.previousElementSibling;
    const rightPanel = resizer.nextElementSibling;

    const handleMouseDown = (event) => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event) => {
      const newWidth = event.clientX - leftPanel.getBoundingClientRect().left;
      leftPanel.style.width = `${newWidth}px`;
      rightPanel.style.width = `calc(100% - ${newWidth}px - 0.25rem)`;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    resizer.addEventListener("mousedown", handleMouseDown);

    return () => {
      resizer.removeEventListener("mousedown", handleMouseDown);
    };
  }, [videoId]);
  
  const fetchVideoDetails = async () => {
    setIsLoading(true);
    try {
      const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
        params: {
          part: "snippet,statistics",
          id: videoId,
          key: API_KEY,
        },
      });
      
      if (response.data.items && response.data.items.length > 0) {
        setVideoDetails(response.data.items[0]);
      }
    } catch (error) {
      console.error("Error fetching video details", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };
  
  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header with back button */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white shadow-sm py-4 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <motion.button
              onClick={() => router.push('/learn')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mr-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </motion.button>
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-indigo-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-800">Learning Video</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Share2 className="h-5 w-5 text-gray-700" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={togglePanel}
            >
              {showPanel ? <ChevronUp className="h-5 w-5 text-gray-700" /> : <ChevronDown className="h-5 w-5 text-gray-700" />}
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      {/* Video Details Section */}
      {videoDetails && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: showPanel ? 1 : 0, 
            height: showPanel ? "auto" : 0,
            marginBottom: showPanel ? "1rem" : 0
          }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-sm overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{videoDetails.snippet.title}</h2>
            <div className="flex items-center text-gray-500 mb-4">
              <span className="mr-4">{videoDetails.snippet.channelTitle}</span>
              <span>{formatDate(videoDetails.snippet.publishedAt)}</span>
            </div>
            <p className="text-gray-700 mb-4">{videoDetails.snippet.description}</p>
          </div>
        </motion.div>
      )}
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col lg:flex-row bg-white shadow-md rounded-xl overflow-hidden"
        >
          <div className="resizable lg:w-1/2 h-[30vh] lg:h-[calc(80vh-64px)] bg-black">
            {/* Embed YouTube Video */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="hidden lg:block w-0.25 px-2 cursor-ew-resize bg-gray-200" />
          <div className="lg:w-1/2 h-[50vh] lg:h-[calc(80vh-64px)]">
            {/* Code Editor Header */}
            <div className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <Code className="h-5 w-5 mr-2" />
                <h3 className="font-medium">Code Editor</h3>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 rounded hover:bg-gray-700 transition-colors"
                >
                  <Copy className="h-4 w-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 rounded hover:bg-gray-700 transition-colors"
                >
                  <Save className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
            {/* Code Editor */}
            <div className="h-[calc(100%-48px)]">
              <CodeEditor />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="fixed -z-10 top-1/2 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="fixed -z-10 bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default VideoPage;
