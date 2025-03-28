import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Get Gemini API key from environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Initialize the OpenAI client with Gemini API endpoint
const openai = new OpenAI({
  apiKey: GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export async function POST(request) {
  try {
    // Check if API key is configured
    if (!GEMINI_API_KEY || GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
      console.error("Gemini API key not configured properly");
      return NextResponse.json(
        { error: 'Gemini API key not configured. Please set a valid GEMINI_API_KEY in your .env file.' },
        { status: 500 }
      );
    }

    // Get the content from the request body
    const { content } = await request.json();
    
    if (!content) {
      return NextResponse.json(
        { error: 'No content provided' },
        { status: 400 }
      );
    }

    console.log("Content received, length:", content.length);

    // Create the prompt for generating mind map
    const prompt = `You are a professor of cognitive science and an expert in creating detailed mind maps. Your task is to generate a comprehensive mind map in JSON format suitable for the GoJS library from the provided text.
    The mind map should be detailed and include all important points without omitting any details. Capture both the main ideas and the supporting details. Structure the mind map in a hierarchical format, showing relationships and connections between different concepts.
    
    Here is an example of the expected GoJS JSON format for the mind map:
    { "class": "go.TreeModel",
        "nodeDataArray": [
            {"key":0, "text":"Mind Map", "loc":"0 0"},
            {"key":1, "parent":0, "text":"Getting more time", "brush":"skyblue", "dir":"right"},
            {"key":11, "parent":1, "text":"Wake up early", "brush":"skyblue", "dir":"right"},
            {"key":12, "parent":1, "text":"Delegate", "brush":"skyblue", "dir":"right"},
            {"key":13, "parent":1, "text":"Simplify", "brush":"skyblue", "dir":"right"},
            {"key":2, "parent":0, "text":"More effective use", "brush":"darkseagreen", "dir":"right"},
            {"key":21, "parent":2, "text":"Planning", "brush":"darkseagreen", "dir":"right"},
            {"key":211, "parent":21, "text":"Priorities", "brush":"darkseagreen", "dir":"right"},
            {"key":212, "parent":21, "text":"Ways to focus", "brush":"darkseagreen", "dir":"right"},
            {"key":22, "parent":2, "text":"Goals", "brush":"darkseagreen", "dir":"right"},
            {"key":3, "parent":0, "text":"Time wasting", "brush":"palevioletred", "dir":"left"}
        ]
    }

    Text to generate mind map for:
    "${content}"

    Instructions:
    1. **Identify Main Ideas**: Extract the main ideas from the text and place them as primary nodes.
    2. **Capture Supporting Details**: Include all supporting details and sub-points as child nodes under the appropriate main idea.
    3. **Maintain Hierarchical Structure**: Ensure the mind map maintains a clear hierarchical structure.
    4. **Do Not Omit Details**: Ensure no important information is omitted.
    5. **Use Appropriate Coloring**: Use different colors to distinguish between different levels of the hierarchy.

    Output the mind map in the specified JSON format.`;

    console.log("Sending request to Gemini API...");

    try {
      // Call the Gemini API using OpenAI-compatible client
      const response = await openai.chat.completions.create({
        model: "gemini-2.0-flash",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.4,
        max_tokens: 8000,
      });

      console.log("Received response from Gemini API");

      // Extract the response text from the completion
      const textResponse = response.choices[0].message.content;

      // Process the response to ensure it's valid JSON
      try {
        const cleanedResponse = textResponse.replace(/```json|```/g, '').trim();
        console.log("Cleaned response (first 100 chars):", cleanedResponse.substring(0, 100));
        
        const mindMapData = JSON.parse(cleanedResponse);
        console.log("Parsed mind map data structure:", 
          JSON.stringify({
            class: mindMapData.class,
            nodeCount: mindMapData.nodeDataArray?.length || 0,
            firstNode: mindMapData.nodeDataArray?.[0] || null
          })
        );
        
        return NextResponse.json(mindMapData);
      } catch (jsonError) {
        console.error('Error parsing JSON response:', jsonError);
        console.error('Raw response:', textResponse);
        return NextResponse.json(
          { error: 'Failed to parse mind map data', message: jsonError.message, rawResponse: textResponse },
          { status: 500 }
        );
      }
    } catch (apiError) {
      console.error('Error calling Gemini API:', apiError);
      return NextResponse.json(
        { 
          error: 'Failed to call Gemini API', 
          message: apiError.message,
          status: apiError.status || 500,
          response: apiError.response ? JSON.stringify(apiError.response) : null 
        },
        { status: apiError.status || 500 }
      );
    }

  } catch (error) {
    console.error('Error processing request:', error);
    
    // Handle OpenAI specific errors
    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        { 
          error: 'API Error', 
          message: error.message,
          status: error.status || 500,
          details: error.response ? JSON.stringify(error.response) : null
        },
        { status: error.status || 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
} 