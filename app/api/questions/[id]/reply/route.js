// app/api/questions/[id]/reply/route.js

import Question from "@/lib/models/questionModel";
import User from "@/lib/models/userModel";
import { connect } from "@/lib/mongodb/mongoose";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  try {
    await connect();

    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const questionId = params.id;
    const { content } = await request.json();

    const question = await Question.findById(questionId);
    if (!question) {
      return NextResponse.json(
        { error: "Question not found" },
        { status: 404 }
      );
    }

    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const reply = {
      author: user.userName,
      content,
      createdAt: new Date(),
    };

    question.replies = question.replies || [];
    question.replies.push(reply);

    // Increment answers count
    question.answers = question.replies.length;

    await question.save();

    // Get the newly created reply from the saved question
    const savedReply = question.replies[question.replies.length - 1];
    
    // Create a serialized version of the reply
    const serializedReply = {
      _id: savedReply._id.toString(),
      author: savedReply.author,
      content: savedReply.content,
      createdAt: savedReply.createdAt.toISOString()
    };

    return NextResponse.json({
      success: true,
      reply: serializedReply,
      answers: question.answers,
    });
  } catch (error) {
    console.error("Error adding reply:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
