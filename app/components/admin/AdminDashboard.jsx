"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import UserManagement from "./UserManagement";
import Analytics from "./Analytics";
import UserLeaderboard from "./UserLeaderboard";

// Simple tab panel that doesn't use portals
const SimpleTabPanel = ({ tabs, activeTab }) => {
  const ActiveComponent = tabs[activeTab]?.component || (() => <div>No tab selected</div>);
  
  return (
    <div className="mt-4">
      <ActiveComponent />
    </div>
  );
};

export default function AdminDashboard({ user }) {
  const [activeTab, setActiveTab] = useState("analytics");
  const [mounted, setMounted] = useState(false);

  // Default values in case user object is missing properties
  const firstName = user?.firstName || "Admin";
  const lastName = user?.lastName || "User";

  // Define tabs configuration
  const tabs = {
    analytics: {
      label: "Analytics",
      component: Analytics
    },
    users: {
      label: "User Management",
      component: UserManagement
    },
    leaderboard: {
      label: "User Leaderboard",
      component: UserLeaderboard
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Create a simpler pre-mount UI to prevent hydration issues
  if (!mounted) {
    return (
      <div className="w-full p-4">
        <div className="mb-8">
          <p className="text-gray-600">
            Welcome, {firstName} {lastName}
          </p>
        </div>
        <div className="w-full bg-gray-100 p-4 rounded">
          <p>Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  // Simple tab navigation without portals for better SSR compatibility
  const SimpleTabsUI = () => (
    <>
      <div className="mb-8">
        <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 space-x-1 w-full">
          {Object.entries(tabs).map(([key, tab]) => (
            <button
              key={key}
              className={`px-3 py-1.5 text-sm font-medium rounded-sm ${
                activeTab === key 
                  ? "bg-white text-gray-950 shadow-sm" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab(key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <SimpleTabPanel tabs={tabs} activeTab={activeTab} />
    </>
  );

  return (
    <div className="w-full">
      <div className="mb-8">
        <p className="text-gray-600">
          Welcome, {firstName} {lastName}
        </p>
        <div className="mt-2">
          <a 
            href="/admin/diagnostics" 
            className="text-blue-600 hover:text-blue-800 text-sm underline"
          >
            Database Diagnostics
          </a>
        </div>
      </div>

      {/* Use the simpler UI that doesn't use Radix UI's Portals */}
      <SimpleTabsUI />

      {/* This is the original Tabs UI - only uncomment if the hydration issues are resolved
      <Tabs defaultValue="analytics" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="leaderboard">User Leaderboard</TabsTrigger>
        </TabsList>
        
        <TabsContent value="analytics" className="mt-4">
          <Analytics />
        </TabsContent>
        
        <TabsContent value="users" className="mt-4">
          <UserManagement />
        </TabsContent>
        
        <TabsContent value="leaderboard" className="mt-4">
          <UserLeaderboard />
        </TabsContent>
      </Tabs>
      */}
    </div>
  );
} 