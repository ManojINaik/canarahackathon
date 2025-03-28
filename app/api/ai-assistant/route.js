import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Configure Router API
const ROUTER_API_KEY = "sk-KZv+qCRlSDWTFTSPqil3l9lDAcrdKuoPxuYaS/DAs2bPyjaxRSOQ8f4JGVGA7dwZj+um7yC4pSm4GC0YDmeMzu4bxL/+xm+wu+ZpyKDx5Ac=";

// Initialize the OpenAI client with Router API endpoint
const openai = new OpenAI({
  apiKey: ROUTER_API_KEY,
  baseURL: "https://router.requesty.ai/v1"
});

export async function POST(request) {
  try {
    // Get the prompt from the request body
    const { prompt } = await request.json();
    
    if (!prompt) {
      return NextResponse.json(
        { error: 'No prompt provided' },
        { status: 400 }
      );
    }

    // Call the Router API using OpenAI client
    const response = await openai.chat.completions.create({
      model: "cline/o3-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert coding assistant that helps programmers with their code questions. Focus on providing helpful, practical code examples and explanations. When providing code, ensure it's well-formatted and follows best practices. Use markdown code blocks with language specification for all code examples."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
    });

    // Extract the response text from the completion
    const textResponse = response.choices[0].message.content;

    return NextResponse.json({ text: textResponse });
  } catch (error) {
    console.error('Error processing request:', error);
    
    // Handle OpenAI specific errors
    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        { error: 'API Error', message: error.message },
        { status: error.status || 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
} 