// app/components/dev-discuss/QuestionCard.jsx

"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs"; // Adjust based on your auth provider
import { ArrowDown, ArrowUp, Clock, User, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function QuestionCard({ question, index }) {
  const { userId } = useAuth();
  const [votes, setVotes] = useState(question.votes);
  const [userVote, setUserVote] = useState(0); // 1 for upvoted, -1 for downvoted, 0 for none
  const [isHovered, setIsHovered] = useState(false);

  // app/components/dev-discuss/QuestionCard.jsx

  useEffect(() => {
    // Check if the user has already voted
    const existingVote = question.voters?.find(
      (voter) => voter.userId === userId
    );
    if (existingVote) {
      setUserVote(existingVote.vote);
    }
  }, [question.voters, userId]);

  const handleUpvote = async () => {
    if (!userId) {
      toast.error("You must be logged in to vote");
      return;
    }
    try {
      const response = await fetch(`/api/questions/${question._id}/upvote`, {
        method: "POST",
      });
      const data = await response.json();
      if (response.ok) {
        setVotes((prevVotes) => prevVotes + 1);
        setUserVote(1);
      } else {
        toast.error(data.error || "Failed to upvote");
      }
    } catch (error) {
      console.error("Error upvoting:", error);
      toast.error("Error upvoting. Please try again.");
    }
  };

  const handleDownvote = async () => {
    if (!userId) {
      toast.error("You must be logged in to vote");
      return;
    }
    try {
      const response = await fetch(`/api/questions/${question._id}/downvote`, {
        method: "POST",
      });
      const data = await response.json();
      if (response.ok) {
        setVotes((prevVotes) => prevVotes - 1);
        setUserVote(-1);
      } else {
        toast.error(data.error || "Failed to downvote");
      }
    } catch (error) {
      console.error("Error downvoting:", error);
      toast.error("Error downvoting. Please try again.");
    }
  };

  // Format date for better display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.05,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.01,
        transition: { duration: 0.2 } 
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 mb-5"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left side - voting and stats */}
        <div className="flex md:flex-col justify-between md:justify-start items-center p-4 md:p-6 bg-gradient-to-b from-indigo-50 to-blue-50 md:min-w-[140px] md:max-w-[140px]">
          <motion.div 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleUpvote}
              disabled={userVote === 1}
              className={`p-2 rounded-full ${userVote === 1 ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            >
              <ArrowUp className={`h-5 w-5 ${userVote === 1 ? "text-blue-600" : "text-gray-500"}`} />
            </motion.button>
            
            <motion.span 
              className="font-semibold text-xl my-1"
              animate={{ scale: votes > 0 ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {votes}
            </motion.span>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleDownvote}
              disabled={userVote === -1}
              className={`p-2 rounded-full ${userVote === -1 ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'}`}
            >
              <ArrowDown className={`h-5 w-5 ${userVote === -1 ? "text-red-600" : "text-gray-500"}`} />
            </motion.button>
          </motion.div>
          
          <div className="flex md:flex-col items-center md:mt-6 gap-4 md:gap-2">
            <div className="flex flex-col items-center">
              <span className="text-green-600 font-bold text-lg">{question.answers}</span>
              <span className="text-xs text-gray-500">answers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-blue-600 font-bold text-lg">{question.tags?.length || 0}</span>
              <span className="text-xs text-gray-500">tags</span>
            </div>
          </div>
        </div>
        
        {/* Right side - content */}
        <div className="flex-1 p-6">
          <h2 className="text-xl font-bold mb-3 text-gray-800 group">
            <Link href={`/dev-discuss/${question._id}`} className="hover:text-blue-600 transition-colors">
              {question.title}
              <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </h2>
          
          <motion.p 
            className="text-gray-600 mb-4 line-clamp-2"
            animate={{ opacity: isHovered ? 0.9 : 0.8 }}
          >
            {question.description}
          </motion.p>

          <div className="flex flex-wrap gap-2 mb-4">
            {question.tags?.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + (i * 0.05) }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#dbeafe" 
                }}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <div className="flex justify-between items-center text-sm text-gray-500 pt-3 border-t">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{formatDate(question.createdAt)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="text-blue-600 font-medium hover:underline">{question.author}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
