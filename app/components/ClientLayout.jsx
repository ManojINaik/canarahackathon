"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Mark component as mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Normalize the pathname to handle trailing slashes
  const normalizedPath = pathname.replace(/\/+$/, "");
  const isHomePage = normalizedPath === "" || normalizedPath === "/";

  // Define paths where Sidebar should not be rendered
  const excludedPaths = ["/sign-in", "/sign-up"];
  const isExcludedPath =
    excludedPaths.includes(normalizedPath) || pathname === "/not-found";

  const shouldRenderSidebar = !isHomePage && !isExcludedPath;

  // Calculate the className based on mounted state
  const getMainClassName = () => {
    if (!mounted) return "w-full";
    
    return `w-full transition-all duration-300 ${
      !isHomePage ? "pt-20" : ""
    } ${
      shouldRenderSidebar && isOpen && windowWidth >= 768
        ? "pl-56"
        : ""
    }`;
  };

  return (
    <>
      {/* Conditionally render Header */}
      {!isHomePage && <Header />}

      {/* Conditionally render Sidebar */}
      {shouldRenderSidebar && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}

      <main className={getMainClassName()}>
        <div className="flex items-start justify-center min-h-screen w-full">
          <div className="w-full">{children}</div>
        </div>
      </main>
    </>
  );
}
