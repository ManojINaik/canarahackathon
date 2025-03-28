// Add this directive to make Header a Client Component
"use client";

import { UserButton } from "@clerk/nextjs";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaBell, FaCode } from "react-icons/fa";

// Client-only wrapper to prevent hydration issues with portals
const ClientOnly = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return children;
};

const Header = () => {
  const router = useRouter();
  const [searchFocused, setSearchFocused] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Fix hydration mismatch issues
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Prevent rendering before client-side hydration
  if (!mounted) return null;
  
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-4 md:px-8 py-4 bg-gradient-to-r from-indigo-950 to-blue-900 shadow-lg"
    >
      {/* Logo Section with animation */}
      <Link href="/" className="flex items-center group">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600 p-2 rounded-lg shadow-lg">
          <motion.div
            animate={{ rotate: [0, 10, 0], y: [0, -2, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
          >
            <span className="text-white font-bold text-2xl">c_</span>
          </motion.div>
          <motion.div 
            className="absolute inset-0 bg-white opacity-0"
            animate={{ opacity: [0, 0.2, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut",
              repeatDelay: 2
            }}
          />
        </div>
        <motion.span 
          className="text-2xl font-bold text-white ml-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          codeSync
        </motion.span>
      </Link>

      {/* Search bar and actions */}
      <div className="flex items-center space-x-4">
        {/* Animated search bar */}
        <motion.div 
          className={`relative hidden md:flex items-center ${searchFocused ? 'flex-grow max-w-md' : 'w-48'}`}
          animate={{ width: searchFocused ? 300 : 200 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="relative w-full">
            <motion.input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 rounded-full bg-white/10 text-white border border-white/20 focus:outline-none focus:border-indigo-400 placeholder-gray-400"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              initial={{ scale: 0.98 }}
              whileFocus={{ scale: 1 }}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </motion.div>
        
        {/* Notification button with animation */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        >
          <FaBell size={20} />
          <motion.span 
            className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.button>
        
        {/* User button with custom styling */}
        <ClientOnly>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <UserButton
              afterSignOutUrl="/"
              signOutCallback={() => {
                router.push("/");
              }}
              appearance={{
                elements: {
                  userButtonAvatarBox: "border-2 border-indigo-500",
                }
              }}
            />
          </motion.div>
        </ClientOnly>
      </div>
    </motion.nav>
  );
};

export default Header;
