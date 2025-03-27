"use client";

import { useEffect, useState } from "react";
import { getUsersByVotes, getUserProfileById } from "@/lib/actions/admin";
import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function UserLeaderboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [profileLoading, setProfileLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const data = await getUsersByVotes();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users by votes:", error);
        setError("Failed to load leaderboard");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const handleViewProfile = async (userId) => {
    try {
      setProfileLoading(true);
      const userProfile = await getUserProfileById(userId);
      setSelectedUser(userProfile);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setError("Failed to load user profile");
    } finally {
      setProfileLoading(false);
    }
  };

  if (loading) {
    return <div className="p-4">Loading leaderboard...</div>;
  }

  if (error && !selectedUser) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Developer Leaderboard by Discussion Votes</h3>
      
      <div className="flex space-x-4">
        {/* Leaderboard Table */}
        <div className={`bg-white shadow-md rounded-lg overflow-hidden ${selectedUser ? 'w-1/2' : 'w-full'}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Votes
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Questions
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user._id} className={selectedUser && selectedUser._id === user._id ? "bg-blue-50" : ""}>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            {index + 1}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {user.image_url && (
                            <img 
                              src={user.image_url} 
                              alt={`${user.firstName} ${user.lastName}`} 
                              className="h-8 w-8 rounded-full mr-3"
                            />
                          )}
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {user.firstName} {user.lastName}
                            </div>
                            <div className="text-xs text-gray-500">
                              @{user.userName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-indigo-600">
                          {user.totalVotes || 0}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.questionCount || 0}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handleViewProfile(user.clerkId)}
                          className="text-blue-600 hover:text-blue-900 font-medium flex items-center"
                          disabled={profileLoading}
                        >
                          <span>View Profile</span>
                          <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-4 text-center text-sm text-gray-500">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Profile Panel */}
        {selectedUser && (
          <div className="w-1/2 bg-white shadow-md rounded-lg p-6 relative">
            <button 
              onClick={() => setSelectedUser(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <MdClose className="h-5 w-5" />
            </button>
            
            <div className="flex items-center mb-6">
              {selectedUser.image_url && (
                <img 
                  src={selectedUser.image_url} 
                  alt={`${selectedUser.firstName} ${selectedUser.lastName}`} 
                  className="h-16 w-16 rounded-full mr-4"
                />
              )}
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedUser.firstName} {selectedUser.lastName}
                </h3>
                <p className="text-sm text-gray-500">@{selectedUser.userName}</p>
                {selectedUser.jobTitle && (
                  <p className="text-md text-gray-700 mt-1">{selectedUser.jobTitle}</p>
                )}
              </div>
            </div>
            
            {/* Bio Section */}
            {selectedUser.bio && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Bio</h4>
                <p className="text-gray-600">{selectedUser.bio}</p>
              </div>
            )}
            
            {/* Skills Section */}
            {selectedUser.skills && selectedUser.skills.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedUser.skills.map((skill, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Links Section */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Links</h4>
              <div className="flex flex-col space-y-2">
                {selectedUser.github && (
                  <a 
                    href={selectedUser.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-indigo-600 flex items-center"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                )}
                
                {selectedUser.linkedin && (
                  <a 
                    href={selectedUser.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-indigo-600 flex items-center"
                  >
                    <FaLinkedin className="mr-2" /> LinkedIn
                  </a>
                )}
                
                {selectedUser.portfolio && (
                  <a 
                    href={selectedUser.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-indigo-600 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Portfolio
                  </a>
                )}
                
                {selectedUser.resumeUrl && (
                  <a 
                    href={selectedUser.resumeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-indigo-600 flex items-center"
                  >
                    <FaFileAlt className="mr-2" /> Resume
                  </a>
                )}
              </div>
            </div>
            
            {/* Education Section */}
            {selectedUser.education && selectedUser.education.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Education</h4>
                {selectedUser.education.map((edu, index) => (
                  <div key={index} className="mb-3">
                    <p className="font-medium text-gray-800">{edu.institution}</p>
                    <p className="text-sm text-gray-600">{edu.degree} in {edu.fieldOfStudy}</p>
                    {edu.startYear && edu.endYear && (
                      <p className="text-xs text-gray-500">{edu.startYear} - {edu.endYear}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {/* Contact & Other Information */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Contact</h4>
              <p className="text-gray-600">{selectedUser.email}</p>
              {selectedUser.jobPreferences && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Job Preferences</h4>
                  <ul className="text-sm text-gray-600">
                    {selectedUser.jobPreferences.jobType && (
                      <li>Looking for: {selectedUser.jobPreferences.jobType}</li>
                    )}
                    {selectedUser.jobPreferences.remoteOnly && (
                      <li>Remote only: Yes</li>
                    )}
                    {selectedUser.jobPreferences.location && (
                      <li>Location: {selectedUser.jobPreferences.location}</li>
                    )}
                    {selectedUser.jobPreferences.expectedSalary && (
                      <li>Expected salary: {selectedUser.jobPreferences.expectedSalary}</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 