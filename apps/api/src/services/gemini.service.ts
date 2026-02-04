import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from '@repo/config';

const genAI = new GoogleGenerativeAI(
  config.geminiApiKey as string
);

export const generatedCode = async (schema: any) => {
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
  });

  const prompt = `You are a senior frontend engineer.
Generate React components using Tailwind CSS, Zustand, TanstackQuery.
Return ONLY valid JSX.

UI Schema:
${JSON.stringify(schema, null, 2)}
`;

  const response = await model.generateContent(prompt);
  return response.response.text();
};
