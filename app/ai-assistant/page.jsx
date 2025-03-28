"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, Copy, Code, Trash, User, ClipboardCheck, Loader2 } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AI_ASSISTANT_PAGE = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isCopied, setIsCopied] = useState({});
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const sampleQuestions = [
    "How do I implement authentication with NextAuth.js?",
    "Explain React useState hook with examples",
    "How can I fix CORS errors in my Express backend?",
    "Write a function to fetch and display data from an API in React"
  ];

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      // Call Router API
      const response = await callGeminiAPI(input);
      
      // Add AI response
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.text }
      ]);
    } catch (error) {
      console.error("Error calling AI API:", error);
      setMessages((prev) => [
        ...prev,
        { 
          role: "assistant", 
          content: `Sorry, I encountered an error: ${error.message || "Please try again later."}` 
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Function to call AI API
  const callGeminiAPI = async (prompt) => {
    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || errorData.error || 'Failed to get response from AI');
      }

      const data = await response.json();
      
      if (!data.text) {
        throw new Error('Received empty response from AI');
      }
      
      return data;
    } catch (error) {
      console.error('Error in API call:', error);
      throw error;
    }
  };

  // Function to copy code to clipboard
  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setIsCopied({ ...isCopied, [id]: true });
    setTimeout(() => {
      setIsCopied({ ...isCopied, [id]: false });
    }, 2000);
  };

  // Function to clear chat history
  const clearChat = () => {
    setMessages([]);
  };

  // Function to parse and format message content with code blocks
  const formatMessage = (content, messageIndex) => {
    if (!content) return null;

    const codeBlockRegex = /```([\w-]+)?\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    let codeBlockCount = 0;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        parts.push(
          <span key={`text-${messageIndex}-${lastIndex}`} className="whitespace-pre-wrap">
            {content.substring(lastIndex, match.index)}
          </span>
        );
      }

      // Add code block
      const language = match[1] || "javascript";
      const code = match[2].trim();
      const codeBlockId = `code-${messageIndex}-${codeBlockCount}`;
      
      parts.push(
        <div key={codeBlockId} className="relative my-4 rounded-md overflow-hidden">
          <div className="flex justify-between items-center bg-gray-800 px-4 py-2 text-gray-300">
            <div className="flex items-center">
              <Code className="h-4 w-4 mr-2" />
              <span className="text-sm">{language}</span>
            </div>
            <button
              onClick={() => copyToClipboard(code, codeBlockId)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Copy code"
            >
              {isCopied[codeBlockId] ? (
                <ClipboardCheck className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            customStyle={{ margin: 0, padding: '1rem' }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      );

      lastIndex = match.index + match[0].length;
      codeBlockCount++;
    }

    // Add remaining text after the last code block
    if (lastIndex < content.length) {
      parts.push(
        <span key={`text-${messageIndex}-end`} className="whitespace-pre-wrap">
          {content.substring(lastIndex)}
        </span>
      );
    }

    return parts.length > 0 ? parts : content;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Bot className="h-6 w-6 text-white mr-3" />
              <h1 className="text-xl font-bold text-white">Router AI Coding Assistant</h1>
            </div>
            <button
              onClick={clearChat}
              className="flex items-center text-white/80 hover:text-white transition-colors text-sm"
            >
              <Trash className="h-4 w-4 mr-1" />
              <span>Clear chat</span>
            </button>
          </div>

          {/* Chat container */}
          <div className="h-[calc(100vh-250px)] flex flex-col">
            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Bot className="h-12 w-12 text-indigo-500 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">Router AI Coding Assistant</h2>
                  <p className="max-w-md text-gray-500 mb-4">
                    Powered by the requesty.ai Router API with o3-mini model. Ask me anything about coding!
                  </p>
                  <p className="max-w-md text-gray-500 mb-8">
                    I can help with code examples, debugging, explaining concepts, and more.
                  </p>
                  
                  <div className="w-full max-w-lg">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Try asking:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {sampleQuestions.map((question, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setInput(question);
                            inputRef.current?.focus();
                          }}
                          className="text-left p-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                        >
                          {question}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === "user"
                          ? "bg-indigo-600 text-white rounded-tr-none"
                          : "bg-gray-100 text-gray-800 rounded-tl-none"
                      }`}
                    >
                      <div className="flex items-center mb-1">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                            message.role === "user"
                              ? "bg-indigo-500"
                              : "bg-gray-300"
                          }`}
                        >
                          {message.role === "user" ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-gray-700" />
                          )}
                        </div>
                        <span className="text-sm font-medium">
                          {message.role === "user" ? "You" : "Assistant"}
                        </span>
                      </div>
                      <div className={`text-sm mt-1 ${message.role === "assistant" ? "text-gray-800" : ""}`}>
                        {formatMessage(message.content, index)}
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                        <Bot className="h-4 w-4 text-gray-700" />
                      </div>
                      <span className="text-sm font-medium">Assistant</span>
                    </div>
                    <div className="flex mt-2 space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "200ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "400ms" }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="border-t border-gray-200 p-4">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about code, debugging, or concepts..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <motion.button
                  type="submit"
                  disabled={isTyping || !input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full ${
                    !input.trim() || isTyping
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white"
                  } transition-colors`}
                >
                  {isTyping ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AI_ASSISTANT_PAGE; 