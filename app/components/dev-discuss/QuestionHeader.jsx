import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, PlusCircle } from "lucide-react";

export default function QuestionHeader() {
  return (
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
              <MessageSquare className="mr-2 h-6 w-6" />
              <h1 className="text-3xl font-bold">Developer Discussions</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-blue-100"
            >
              Ask questions, share knowledge, and connect with other developers
            </motion.p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/dev-discuss/ask-question">
              <Button className="bg-white text-indigo-600 hover:bg-blue-50 hover:text-indigo-700 font-medium px-6 py-2 rounded-full transition-colors shadow-md">
                <PlusCircle className="mr-2 h-4 w-4" />
                Ask a Question
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
