// app/components/dev-discuss/QuestionTabs.jsx

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function QuestionTabs({ selectedTab, onTabChange, tabs }) {
  return (
    <div className="mb-6">
      <Tabs value={selectedTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="bg-white p-1 rounded-xl shadow-sm flex w-full md:w-auto">
          {tabs.map((tab, index) => (
            <motion.div
              key={tab}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <TabsTrigger 
                value={tab}
                className={`px-6 py-2.5 ${
                  selectedTab === tab 
                    ? 'font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md'
                    : 'text-gray-700 hover:text-indigo-600'
                } rounded-lg transition-all duration-200`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                
                {/* Add subtle pulse animation only to the active tab */}
                {selectedTab === tab && (
                  <motion.span
                    className="absolute inset-0 rounded-lg bg-indigo-500 -z-10"
                    animate={{ 
                      boxShadow: ['0 0 0 0 rgba(99, 102, 241, 0)', '0 0 0 4px rgba(99, 102, 241, 0.3)', '0 0 0 0 rgba(99, 102, 241, 0)'] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </TabsTrigger>
            </motion.div>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
