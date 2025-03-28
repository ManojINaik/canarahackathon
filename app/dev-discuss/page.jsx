// app/dev-discuss/page.jsx

"use client";

import QuestionsLoading from "@/app/components/dev-discuss/Loading";
import QuestionFilters from "@/app/components/dev-discuss/QuestionFilters";
import QuestionHeader from "@/app/components/dev-discuss/QuestionHeader";
import QuestionList from "@/app/components/dev-discuss/QuestionList";
import QuestionTabs from "@/app/components/dev-discuss/QuestionTabs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [questions, setQuestions] = useState({
    owned: [],
    others: [],
  });
  const [loading, setLoading] = useState(true);

  const tabs = ["all", "my questions", "popular"];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/api/questions/all-questions");
        if (response.ok) {
          const data = await response.json();
          setQuestions({
            owned: data.owned,
            others: data.others,
          });
        } else {
          console.error("Failed to fetch questions");
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return <QuestionsLoading />;
  }

  let displayedQuestions = [];
  if (selectedTab === "all") {
    displayedQuestions = [...questions.owned, ...questions.others];
  } else if (selectedTab === "my questions") {
    displayedQuestions = questions.owned;
  } else if (selectedTab === "popular") {
    displayedQuestions = [...questions.owned, ...questions.others]
      .map((question) => ({
        ...question,
        score: question.votes + question.answers * 2, // Calculate weighted score
      }))
      .sort((a, b) => b.score - a.score); // Sort by score in descending order
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <QuestionHeader />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 py-8"
      >
        <motion.div variants={itemVariants}>
          <QuestionFilters questionCount={displayedQuestions.length} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <QuestionTabs
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            tabs={tabs}
          />
        </motion.div>
        
        <QuestionList questions={displayedQuestions} />
      </motion.div>
      
      {/* Decorative elements */}
      <div className="fixed -z-10 top-1/3 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="fixed -z-10 bottom-0 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
    </main>
  );
}
