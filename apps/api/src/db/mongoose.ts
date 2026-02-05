import * as color from 'colors';
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();


console.log("DB URL : ", process.env.DB_URL)

mongoose.connect(process.env.DB_URL as string)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error:'));

db.once("open", () => {
  console.log(color.bgYellow("Connected to DB"));
})


export default db;