"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function Diagnostics() {
  const { user, isLoaded } = useUser();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function runDiagnostics() {
      if (!isLoaded || !mounted) return;
      
      try {
        setLoading(true);
        const response = await fetch("/api/admin/test-db");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setResults(data);
        setLoading(false);
      } catch (err) {
        console.error("Error running diagnostics:", err);
        setError(err.message || "An unknown error occurred");
        setLoading(false);
      }
    }

    runDiagnostics();
  }, [isLoaded, mounted]);

  if (!mounted) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Database Diagnostics</h1>

      {loading && <div className="p-4">Running diagnostics...</div>}

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-700">Error: {error}</p>
        </div>
      )}

      {!loading && !error && results && (
        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Test Results Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {results.tests.map((test, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-md ${
                    test.status === "Success" 
                      ? "bg-green-100 border border-green-300" 
                      : "bg-red-100 border border-red-300"
                  }`}
                >
                  <h3 className="font-semibold">{test.name}</h3>
                  <p className={test.status === "Success" ? "text-green-700" : "text-red-700"}>
                    Status: {test.status}
                  </p>
                  {test.error && <p className="text-red-600 text-sm mt-1">Error: {test.error}</p>}
                  {test.count !== undefined && <p className="text-sm mt-1">Count: {test.count}</p>}
                  {test.found !== undefined && <p className="text-sm mt-1">Found: {test.found ? "Yes" : "No"}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">MongoDB Information</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Host:</span> {results.mongodbInfo.host}</p>
              <p><span className="font-medium">Database:</span> {results.mongodbInfo.name}</p>
              <p><span className="font-medium">Connection Status:</span> {
                results.mongodbInfo.readyState === 1 ? 
                  "Connected (1)" : 
                  `Not Connected (${results.mongodbInfo.readyState})`
              }</p>
              <p><span className="font-medium">Models:</span> {results.mongodbInfo.models?.join(", ")}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">User Information</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Total Users:</span> {results.userCount}</p>
              
              {results.userSample && (
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">Sample User</h3>
                  <div className="pl-4 border-l-2 border-gray-300 mt-2 space-y-1">
                    <p><span className="font-medium">ID:</span> {results.userSample._id}</p>
                    <p><span className="font-medium">Name:</span> {results.userSample.firstName} {results.userSample.lastName}</p>
                    <p><span className="font-medium">Email:</span> {results.userSample.email}</p>
                    <p><span className="font-medium">Username:</span> {results.userSample.userName}</p>
                    <p><span className="font-medium">Created:</span> {new Date(results.userSample.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              )}
              
              {results.currentUser && (
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">Current User</h3>
                  <div className="pl-4 border-l-2 border-gray-300 mt-2 space-y-1">
                    <p><span className="font-medium">ID:</span> {results.currentUser._id}</p>
                    <p><span className="font-medium">Name:</span> {results.currentUser.firstName} {results.currentUser.lastName}</p>
                    <p><span className="font-medium">Email:</span> {results.currentUser.email}</p>
                    <p><span className="font-medium">Username:</span> {results.currentUser.userName}</p>
                    <p><span className="font-medium">Created:</span> {new Date(results.currentUser.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Database Collections</h2>
            <ul className="list-disc pl-5 space-y-1">
              {results.allCollections.map((collection, index) => (
                <li key={index}>{collection}</li>
              ))}
            </ul>
          </div>

          {results.errors.length > 0 && (
            <div className="bg-red-50 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Errors</h2>
              <div className="space-y-4">
                {results.errors.map((err, index) => (
                  <div key={index} className="p-4 bg-red-100 rounded-md">
                    <p className="font-medium">{err.test}</p>
                    <p className="text-red-600 text-sm">{err.error}</p>
                    <pre className="text-xs mt-2 bg-gray-100 p-2 overflow-x-auto">{err.stack}</pre>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-8">
        <button 
          onClick={() => window.location.reload()} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          Run Again
        </button>
        <a 
          href="/admin" 
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Back to Admin Panel
        </a>
      </div>
    </div>
  );
} 