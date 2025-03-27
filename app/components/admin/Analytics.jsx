"use client";

import { useEffect, useState } from "react";
import { getUserStats } from "@/lib/actions/admin";

export default function Analytics() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    newUsers: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        console.log("Analytics: Fetching user stats");
        const data = await getUserStats();
        console.log("Analytics: Received stats data:", data);
        
        if (data && typeof data === 'object') {
          setStats({
            totalUsers: data.totalUsers || 0,
            newUsers: data.newUsers || 0,
            loading: false,
            error: null
          });
        } else {
          console.error("Analytics: Invalid data format received", data);
          setStats({
            totalUsers: 0,
            newUsers: 0,
            loading: false,
            error: "Invalid data format received"
          });
        }
      } catch (error) {
        console.error("Analytics: Error fetching stats:", error);
        setStats({
          totalUsers: 0,
          newUsers: 0,
          loading: false,
          error: error.message || "Failed to load stats"
        });
      }
    }

    fetchStats();
  }, []);

  if (stats.loading) {
    return <div className="p-4">Loading statistics...</div>;
  }

  if (stats.error) {
    return (
      <div className="p-4">
        <div className="text-red-500 mb-4">Error: {stats.error}</div>
        <button 
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-2">Total Users</h3>
        <p className="text-3xl font-bold">{stats.totalUsers}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-2">New Users (Last 7 Days)</h3>
        <p className="text-3xl font-bold">{stats.newUsers}</p>
      </div>

      <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">User Growth</h3>
        <p className="text-gray-600">
          {stats.newUsers > 0 
            ? `${stats.newUsers} new users joined in the last 7 days.` 
            : "No new users joined in the last 7 days."}
        </p>
        <div className="mt-4 h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500" 
            style={{ 
              width: `${stats.totalUsers > 0 
                ? Math.min(100, (stats.newUsers / stats.totalUsers) * 100) 
                : 0}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
} 