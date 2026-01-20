import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export async function getFinancingAdvice(treatment: string, amount: number) {
  try {
    const client = getClient();
    if (!client) {
      return "Healthcare financing allows you to prioritize essential procedures today while managing your cash flow. We recommend setting up automatic payments to ensure consistency.";
    }
    const response = await client.models.generateContent({
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