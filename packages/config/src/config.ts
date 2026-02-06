import dotenv from "dotenv";
import path from "node:path";

// Load env from current working dir first, then monorepo root as a fallback.
dotenv.config();
dotenv.config({
  path: path.resolve(process.cwd(), "..", "..", ".env"),
});

export const config = {
  port: process.env.PORT || 3030,
  dbUrl : process.env.DB_URL,
  geminiApiKey : process.env.GEMINI_API_KEY,
  figmaPAT : process.env.FIGMA_PAT,
  clerkPublishableKey : process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  clerkSecretKey : process.env.CLERK_SECRET_KEY,
};
