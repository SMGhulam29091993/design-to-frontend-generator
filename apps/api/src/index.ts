import express from "express";
import * as color from "colors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3030, (err) => {
  if (err) {
    console.log(color.bgRed("Something went wrong while starting the server"));
    return;
  }
  console.log(color.bgGreen(`Server is up and running on port ${3030}`));
});
