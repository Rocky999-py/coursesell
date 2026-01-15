
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIRecommendation = async (userPrompt: string) => {
  const model = 'gemini-3-flash-preview';
  
  const productContext = PRODUCTS.map(p => 
    `${p.name} (${p.category}): ${p.description} - Price: ${p.price} BDT`
  ).join('\n');

  const systemInstruction = `
    You are a helpful assistant for "EduTools BD", an online platform selling courses and digital tools in Bangladesh.
    Language: Bengali (mostly) with some English tech terms.
    Your job is to recommend the best products from our catalog based on user needs.
    Current Catalog:
    ${productContext}
    
    If the user asks for something not in the list, politely tell them we don't have it yet but suggest the closest alternative.
    Keep responses friendly, concise, and professional.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "দুঃখিত, বর্তমানে এআই রেসপন্স দিতে পারছে না। দয়া করে আবার চেষ্টা করুন।";
  }
};
