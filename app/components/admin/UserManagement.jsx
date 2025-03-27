"use client";

import { useEffect, useState } from "react";
import { getAllUsers } from "@/lib/actions/admin";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        console.log("UserManagement: Fetching all users");
        const data = await getAllUsers();
        console.log("UserManagement: Users fetched:", data ? data.length : 0);
        
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("UserManagement: Data is not an array:", data);
          setUsers([]);
          setError("Invalid data format received");
        }
        setLoading(false);
      } catch (error) {
        console.error("UserManagement: Error fetching users:", error);
        setError(error.message || "Failed to load users");
        setUsers([]);
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const searchTerm = search.toLowerCase();
    return (
      user.firstName?.toLowerCase().includes(searchTerm) ||
      user.lastName?.toLowerCase().includes(searchTerm) ||
      user.email?.toLowerCase().includes(searchTerm) ||
      user.userName?.toLowerCase().includes(searchTerm)
    );
  });

  if (loading) {
    return <div className="p-4">Loading users...</div>;
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="text-red-500 mb-4">Error: {error}</div>
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
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full p-2 border border-gray-300 rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Joined
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {user.firstName || ""} {user.lastName || ""}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.userName || "N/A"}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email || "N/A"}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
} 