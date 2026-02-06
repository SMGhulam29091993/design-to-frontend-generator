import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from '@repo/config';
import { stripCodeFences } from '../lib/helper';

const genAI = new GoogleGenerativeAI(
  config.geminiApiKey as string
);

export const generatedCode = async (schema: any) => {
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
  });

  const prompt = `You are a senior frontend engineer.

STRICT RULES (DO NOT BREAK THESE):
- Use ONLY React and JSX
- Do NOT import or use any external libraries
- Do NOT use Zustand, Redux, React Query, TanStack, or any state libraries
- Use only useState and useEffect from React if needed
- Use static placeholder data (no API calls)
- Use Tailwind CSS for styling
- Generate a SINGLE React component
- Export the component as DEFAULT
- Do NOT use markdown
- Do NOT wrap code in code fences
- Do NOT add explanations or comments outside the code

The output MUST be directly executable in a React sandbox.

Generate a React component based on the following UI schema:
{{UI_SCHEMA_JSON}}


UI Schema:
${JSON.stringify(schema, null, 2)}
`;

  const response = await model.generateContent(prompt);
  const raw =  response.response.text();
  return stripCodeFences(raw);
};
