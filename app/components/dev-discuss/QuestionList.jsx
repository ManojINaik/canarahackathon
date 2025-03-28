// app/components/dev-discuss/QuestionList.jsx

import QuestionCard from "./QuestionCard";
import { motion } from "framer-motion";

export default function QuestionList({ questions }) {
  // If there are no questions, show a message
  if (questions.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12 p-10 text-center bg-white rounded-xl shadow-sm"
      >
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No questions found</h3>
        <p className="text-gray-500">Be the first to ask a question!</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="mt-6 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {questions.map((question, index) => (
        <QuestionCard key={question._id} question={question} index={index} />
      ))}
    </motion.div>
  );
}
