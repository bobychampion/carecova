import { GoogleGenAI } from "@google/genai";

// Use process.env.API_KEY directly when initializing the client as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getFinancingAdvice(treatment: string, amount: number) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User is seeking financing for ${treatment} costing ${amount} NGN. 
      Briefly explain why healthcare financing is beneficial for this treatment and suggest 3 tips for managing medical installments responsibly. 
      Keep the tone empathetic, professional, and medical.`,
      config: {
        systemInstruction: "You are a professional medical financing advisor for CareCova. Keep responses concise and focus on elective procedures."
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Healthcare financing allows you to prioritize essential procedures today while managing your cash flow. We recommend setting up automatic payments to ensure consistency.";
  }
}