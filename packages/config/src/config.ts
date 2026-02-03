import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3030,
  dbUrl : process.env.DB_URL,
};
