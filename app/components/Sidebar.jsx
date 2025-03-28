"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaCodepen,
  FaComments,
  FaQuestionCircle,
  FaUserShield,
  FaUser,
  FaRobot,
  FaBrain,
} from "react-icons/fa";
import { MdAddBox, MdNotifications } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import {
  TbLayoutDashboardFilled,
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarLeftExpandFilled,
} from "react-icons/tb";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, isLoaded } = useUser();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  // Ref for menu items hover effect
  const itemsRef = useRef([]);

  // Fix hydration mismatch by ensuring client-side only code runs after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 768) {
          // desktop breakpoint
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      
      // Cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [setIsOpen, mounted]);

  useEffect(() => {
    async function checkAdminStatus() {
      if (isLoaded && user) {
        // Simplified admin check for development - uses email only
        // In production, use a proper API endpoint for this check
        const adminEmails = ["naik97059@gmail.com", "test@example.com", "admin@test.com"];
        setIsAdmin(user.emailAddresses && user.emailAddresses.length > 0 && 
                  adminEmails.includes(user.emailAddresses[0].emailAddress));
      }
    }
    
    if (mounted) {
      checkAdminStatus();
    }
  }, [user, isLoaded, mounted]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  // Don't render anything until client-side hydration is complete
  if (!mounted) {
    return null;
  }
  
  // Animation variants
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    closed: {
      x: "-85%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };
  
  const itemVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      }
    },
    closed: {
      x: -20,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      }
    }
  };
  
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 400 }
    },
    initial: {
      scale: 1,
      rotate: 0
    }
  };
  
  // Navigation items for mapping
  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: TbLayoutDashboardFilled },
    { href: "/learn", label: "Learn", icon: SiGoogleclassroom },
    { href: "/playground", label: "Playground", icon: FaCodepen },
    { href: "/dev-discuss", label: "DevDiscuss", icon: FaComments },
    { href: "/ai-assistant", label: "AI Assistant", icon: FaRobot },
    { href: "/ai-mindmap", label: "AI Mind Map", icon: FaBrain },
    { href: "/notifications", label: "Notifications", icon: MdNotifications },
    { href: "/profile", label: "Profile", icon: FaUser },
    { href: "/help", label: "Help", icon: FaQuestionCircle },
  ];
  
  // Optional admin menu item
  if (isAdmin) {
    navItems.push({ href: "/admin", label: "Admin Panel", icon: FaUserShield, isAdmin: true });
  }

  return (
    <div className="flex flex-row">
      <motion.div
        variants={sidebarVariants}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className={`fixed top-20 left-0 h-full bg-gradient-to-b from-indigo-950 via-indigo-900 to-blue-900 transition-all z-50 shadow-2xl rounded-r-2xl`}
      >
        <div className="py-4 relative flex flex-col h-full">
          {/* Logo with animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 px-6"
          >
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-2 rounded-lg shadow-lg">
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
              </div>
              <h1 className="ml-2 text-white font-bold text-xl">codeSync</h1>
            </div>
          </motion.div>
          
          {/* Nav items with animations */}
          <nav className="flex flex-col w-56 space-y-1 px-4 flex-grow">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center rounded-xl p-3 ${
                      isActive 
                        ? "bg-white/10 text-white" 
                        : item.isAdmin 
                          ? "text-blue-300 hover:bg-white/5 hover:text-blue-200" 
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                    } transition-all duration-200 relative group overflow-hidden`}
                  >
                    {/* Background glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
                    
                    {/* Indicator line for active item */}
                    {isActive && (
                      <motion.div 
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-400"
                        layoutId="activeIndicator"
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Icon with animation */}
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      className={`mr-3 ${isActive ? "text-indigo-300" : ""}`}
                    >
                      <item.icon size={isActive ? 22 : 20} />
                    </motion.div>
                    
                    {/* Label text */}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>
          
          {/* Profile section at bottom */}
          <motion.div 
            variants={itemVariants}
            className="mt-auto px-4 py-3 border-t border-white/10"
          >
            {user && (
              <div className="flex items-center p-2 rounded-lg bg-white/5 text-white">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center">
                  {user.firstName?.charAt(0) || "U"}
                </div>
                <div className="ml-2 truncate">
                  <p className="text-sm font-medium">{user.firstName} {user.lastName}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Toggle button with animation */}
        <motion.div 
          className="absolute -right-4 top-4 bg-gradient-to-r from-indigo-700 to-indigo-600 rounded-full shadow-lg p-1 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSidebar}
        >
          {!isOpen ? (
            <TbLayoutSidebarLeftExpandFilled className="text-white" fontSize="22px" />
          ) : (
            <TbLayoutSidebarLeftCollapseFilled className="text-white" fontSize="22px" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
