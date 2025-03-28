"use server";

import Question from "../models/questionModel";
import User from "../models/userModel";
import { connect } from "../mongodb/mongoose";
import { getOrCreateUser } from "./user";
const Groq = require("groq-sdk");

// Initialize the Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Function to generate an AI answer with retries
const generateAIAnswer = async (
  title,
  description,
  retries = 3,
  delay = 2000
) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Attempt ${attempt}: Generating AI answer...`);
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Provide an in-depth solution as if you have 15 years of experience in computer science and IT. Kindly refuse to asnwer questions unrelated to the domain(this is a MUST). For related questions, Offer explanations, code examples, and best practices similar to a StackOverflow response.",
          },
          {
            role: "user",
            content: `${title}\n\n${description}`,
          },
        ],
        model: "llama3-70b-8192",
        temperature: 0.5,
        max_tokens: 800,
        top_p: 0.65,
        stream: false,
        stop: null,
      });

      const aiResponse = chatCompletion.choices[0].message.content || "";
      console.log("AI Answer Generated Successfully:");
      return aiResponse;
    } catch (error) {
      console.error(
        `Attempt ${attempt} - Error generating AI answer:`,
        error.message
      );
      if (attempt === retries) {
        console.error("Max retries reached. Failed to generate AI answer.");
        return "An error occurred while generating the AI response after multiple attempts.";
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};

// Function to create a question and trigger AI generation if requested
export const createQuestion = async (
  title,
  description,
  tags,
  author,
  aiAnswerRequested
) => {
  try {
    await connect();
    
    if (!author) {
      throw new Error("Author ID is required");
    }
    
    const user = await getOrCreateUser(author);

    // Create the question in the database with `aiAnswerRequested` flag
    const question = await Question.create({
      title,
      description,
      tags,
      author: user.userName,
      aiAnswerRequested,
    });

    console.log("Question created:", question);

    // Respond to the frontend immediately with success
    setTimeout(async () => {
      if (aiAnswerRequested) {
        const aiAnswerContent = await generateAIAnswer(title, description);
        question.aiAnswer.content = aiAnswerContent;
        question.aiAnswer.time = new Date();
        await question.save();
        console.log("AI answer saved to the question.");
      }
    }, 0);

    // Properly serialize the question to a plain JavaScript object before returning
    const serializedQuestion = {
      ...question.toObject(),
      _id: question._id.toString(),
      createdAt: question.createdAt.toISOString(),
      updatedAt: question.updatedAt.toISOString(),
      voters: question.voters?.map(v => ({
        userId: v.userId,
        vote: v.vote,
        _id: v._id?.toString()
      })) || [],
      replies: question.replies?.map(r => ({
        ...r,
        _id: r._id?.toString(),
        createdAt: r.createdAt?.toISOString()
      })) || []
    };

    // Return serialized question to frontend
    return serializedQuestion;
  } catch (error) {
    console.error("Error creating question:", error);
    if (error.message === "User not found. Please make sure you are properly logged in.") {
      throw error;
    }
    if (error.message === "Author ID is required") {
      throw error;
    }
    throw new Error("Failed to create question. Please try again later.");
  }
};

export const getQuestionById = async (questionId) => {
  try {
    await connect();

    const question = await Question.findById(questionId).lean();

    if (!question) {
      throw new Error("Question not found");
    }

    // Set defaults for aiAnswerRequested and aiAnswer
    question.aiAnswerRequested = question.aiAnswerRequested || false;
    question.aiAnswer = question.aiAnswer || { content: null };

    // Initialize `replies` as an empty array if it is undefined
    question.replies = question.replies || [];

    // Format dates and IDs for client-friendly response
    question._id = question._id.toString();
    
    // Fix serialization issue - properly convert MongoDB objects to plain objects
    if (question.voters && question.voters.length > 0) {
      question.voters = question.voters.map(voter => ({
        userId: voter.userId,
        vote: voter.vote,
        _id: voter._id.toString()
      }));
    }
    
    question.replies = question.replies.map((reply) => ({
      ...reply,
      _id: reply._id ? reply._id.toString() : undefined,
      createdAt: reply.createdAt ? reply.createdAt.toISOString() : new Date().toISOString(),
    }));

    return question;
  } catch (error) {
    console.error("Error fetching question by ID:", error);
    throw error;
  }
};


export const generateReview = async (code, retries = 3) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Attempt ${attempt}: Generating AI review...`);
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Provide an in-depth code review as if you have 15 years of experience in computer science and IT. Kindly refuse to answer questions unrelated to the domain(this is a MUST). You have to provide feedback based on the code. For related questions, Offer explanations, code examples, and best practices similar to a StackOverflow response.",
          },
          {
            role: "user",
            content: `${code}`,
          },
        ],
        model: "llama3-70b-8192",
        temperature: 0.5,
        max_tokens: 800,
        top_p: 0.65,
        stream: false,
        stop: null,
      });

      const aiResponse = chatCompletion.choices[0].message.content || "";
      console.log("AI Review Generated Successfully:");
      console.log(aiResponse);
      return aiResponse;
    } catch (error) {
      console.error(`Attempt ${attempt} - Error generating AI answer:`, error.message);
      if (attempt === retries) {
        console.error("Max retries reached. Failed to generate AI answer.");
        return "An error occurred while generating the AI response after multiple attempts.";
      }
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Assuming a delay of 1 second between retries
    }
  }
};
