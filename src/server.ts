import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";
dotenv.config();

// ADD CONNECTION TO MONGODB
if (
  process.env.MONGO_URI == undefined ||
  process.env.PASSWORD === undefined
) {
  throw new Error("DATABASE environment variable(s) not set");
}

const DB = process.env.MONGO_URI.replace(
  "<PASSWORD>",
  process.env.PASSWORD
);

void mongoose.connect(DB);

mongoose.connection
  .on("open", () => {
    console.log("connected to mongo");
  })
  .on("close", () => {
    console.log("disconnected from mongo");
  })
  .on("error", (error) => {
    console.log("connection failed", error);
  });

// START THE SERVER
const PORT: string | number = process.env.PORT ?? 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});