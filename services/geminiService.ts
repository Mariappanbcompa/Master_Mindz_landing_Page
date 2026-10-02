import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Initialize Gemini Client
// The API key is expected to be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToCounselor = async (
  userMessage: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const modelId = "gemini-2.0-flash";
    
    const response = await ai.models.generateContent({
      model: modelId,
      contents: [
        ...history.map(h => ({
            role: h.role,
            parts: h.parts
        })),
        {
            role: 'user',
            parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at this moment. Please try again.";
  } catch (error) {
    console.error("Error communicating with AI Counselor:", error);
    return "I'm currently experiencing high traffic. Please try asking again in a moment or click 'Book a Demo' to speak with a human advisor.";
  }
};
