"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

// Hardcoded admin emails - must match the ones in lib/actions/admin.js
const ADMIN_EMAILS = ["naik97059@gmail.com", "test@example.com", "admin@test.com"];

export default function EmergencyAccess() {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  // Handle client-side only rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  const checkAccess = () => {
    if (!isLoaded || !user) {
      setError("You must be logged in to access this page");
      return;
    }

    const email = user.emailAddresses?.[0]?.emailAddress;
    if (!email) {
      setError("No email address found for your account");
      return;
    }

    if (ADMIN_EMAILS.includes(email)) {
      setMessage("You have admin access! Redirecting to admin panel...");
      setTimeout(() => {
        router.push("/admin");
      }, 2000);
    } else {
      setError(`Email ${email} does not have admin access`);
    }
  };

  // Prevent hydration issues by not rendering anything until client-side
  if (!mounted) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Emergency Admin Access</h1>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="text-yellow-700">
          This page is for emergency access when the database connection is not working.
          It checks your Clerk email directly against the admin email list.
        </p>
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {message && (
        <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6">
          <p className="text-green-700">{message}</p>
        </div>
      )}

      <div className="mb-6">
        <p>Current user: {isLoaded ? (user ? user.emailAddresses[0]?.emailAddress : "Not logged in") : "Loading..."}</p>
      </div>

      <button
        onClick={checkAccess}
        disabled={!isLoaded || !user}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        Check Admin Access
      </button>

      <div className="mt-8">
        <p>
          <a href="/dashboard" className="text-blue-500 hover:underline">
            Return to Dashboard
          </a>
        </p>
      </div>
    </div>
  );
} 