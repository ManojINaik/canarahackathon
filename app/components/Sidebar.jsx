"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaChevronDown,
  FaCodepen,
  FaComments,
  FaQuestionCircle,
  FaUserShield,
  FaUser,
} from "react-icons/fa";
import { MdAddBox, MdNotifications } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import {
  TbLayoutDashboardFilled,
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarLeftExpandFilled,
} from "react-icons/tb";
import { useUser } from "@clerk/nextjs";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, isLoaded } = useUser();
  const [mounted, setMounted] = useState(false);

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

  return (
    <div className="flex flex-row">
      <div
        className={`fixed top-20 left-0 h-full bg-sky-50 transition-transform z-50 shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-[85%]"
        }`}
      >
        <nav className="flex flex-col w-56 p-4 pr-12 space-y-4">
          <Link
            href="/dashboard"
            className="flex items-center text-gray-900 hover:text-indigo-600 text-lg p-2"
          >
            <TbLayoutDashboardFilled className="mr-2" />
            Dashboard
          </Link>
          <Link
            href="/learn"
            className="flex items-center text-gray-900 hover:text-indigo-600 text-lg p-2"
          >
            <SiGoogleclassroom className="mr-2" />
            Learn
          </Link>
          <Link
            href="/playground"
            className="flex items-center text-gray-900 hover:text-indigo-600 text-lg p-2"
          >
            <FaCodepen className="mr-2" />
            Playground
          </Link>
          <Link
            href="/dev-discuss"
            className="flex items-center text-gray-900 hover:text-indigo-600 text-lg p-2"
          >
            <FaComments className="mr-2" />
            DevDiscuss
          </Link>
          <Link
            href="/notifications"
            className="flex items-center text-gray-900 hover:text-indigo-600 text-lg p-2"
          >
            <MdNotifications className="mr-2" />
            Notifications
          </Link>
          <Link
            href="/profile"
            className="flex items-center text-gray-900 hover:text-indigo-600 text-lg p-2"
          >
            <FaUser className="mr-2" />
            Profile
          </Link>
          <Link
            href="/help"
            className="flex items-center text-gray-900 hover:text-indigo-600 text-lg p-2"
          >
            <FaQuestionCircle className="mr-2" />
            Help
          </Link>
          
          {isAdmin && (
            <Link
              href="/admin"
              className="flex items-center text-blue-700 hover:text-blue-900 font-semibold text-lg p-2"
            >
              <FaUserShield className="mr-2" />
              Admin Panel
            </Link>
          )}
        </nav>
        <div className="absolute right-2 top-2">
          {!isOpen ? (
            <button
              onClick={toggleSidebar}
              className="text-indigo-600 hover:text-indigo-700"
            >
              <TbLayoutSidebarLeftExpandFilled fontSize="22px" />
            </button>
          ) : (
            <button
              onClick={toggleSidebar}
              className="text-indigo-600 hover:text-indigo-700"
            >
              <TbLayoutSidebarLeftCollapseFilled fontSize="22px" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
