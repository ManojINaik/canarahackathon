import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, Clock, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function QuestionFilters({ questionCount }) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isFilterHovered, setIsFilterHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
    >
      <div className="flex items-center gap-2">
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <BarChart2 className="h-5 w-5 text-indigo-600" />
        </motion.div>
        <motion.p 
          className="text-lg font-medium flex items-center gap-2 text-gray-800"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <span className="text-indigo-600 font-bold">{questionCount.toLocaleString()}</span> 
          questions available
        </motion.p>
      </div>
      
      <div className="flex gap-4 w-full md:w-auto">
        <motion.div 
          className="flex gap-2 w-full md:w-auto"
          animate={{ width: isSearchFocused ? "100%" : "auto" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsFilterHovered(true)}
            onHoverEnd={() => setIsFilterHovered(false)}
          >
            <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white border-indigo-100 hover:bg-indigo-50 hover:border-indigo-200">
              <motion.div
                animate={{ rotate: isFilterHovered ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Filter className="h-4 w-4 text-indigo-500" />
              </motion.div>
              <span className="font-medium text-gray-700">Filter</span>
            </Button>
          </motion.div>
          
          <div className="relative flex-1">
            <motion.div
              animate={{ 
                x: isSearchFocused ? -25 : 0,
                opacity: isSearchFocused ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <Search className="h-4 w-4" />
            </motion.div>
            
            <Input
              placeholder="Search questions..."
              className="pl-9 border-indigo-100 focus:border-indigo-300 focus:ring-indigo-200 w-full md:w-[300px]"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            
            {isSearchFocused && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-500"
              >
                <Clock className="h-4 w-4" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 