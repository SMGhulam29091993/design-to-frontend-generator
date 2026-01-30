import express from "express";
import * as color from "colors";
import cors from "cors";
import morgan from "morgan";

const app = express();

const allowOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow: boolean) => void,
  ) => {
    if (allowOrigins.indexOf(origin!) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.listen(3030, (err) => {
  if (err) {
    console.log(color.bgRed("Something went wrong while starting the server"));
    return;
  }
  console.log(color.bgGreen(`Server is up and running on port ${3030}`));
});
