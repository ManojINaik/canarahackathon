'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function ErrorComponent({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('AI Mindmap error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <AlertTriangle className="h-6 w-6 text-white mr-3" />
              <h1 className="text-xl font-bold text-white">Something went wrong</h1>
            </div>
          </div>

          <div className="p-6 text-center">
            <div className="mb-6 inline-flex items-center justify-center p-4 bg-red-50 rounded-full">
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
            
            <h2 className="text-2xl font-semibold mb-3">AI Mindmap Error</h2>
            
            <div className="mb-6 max-w-lg mx-auto">
              <p className="text-gray-700 mb-4">
                We encountered an error while generating your mind map. This might be due to:
              </p>
              <ul className="text-gray-600 text-left list-disc ml-8 mb-4">
                <li>Missing or invalid Gemini API key configuration</li>
                <li>Input text that is too long or complex</li>
                <li>Temporary issues with the Gemini API service</li>
                <li>Server-side processing errors</li>
              </ul>
              <p className="text-gray-600 text-sm mb-6 italic">
                Error details: {error?.message || 'Unknown error'}
              </p>
            </div>
            
            <button
              onClick={() => reset()}
              className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:from-teal-700 hover:to-green-700 transition-all flex items-center justify-center mx-auto"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 