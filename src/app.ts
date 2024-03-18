import express from "express";
import router from "./routes/todoRoutes";

const app = express();

// MIDDLEWARE for format the request body
app.use(express.json({limit: "10kb"}));

// Routing
app.use("/planes", router)

export default app;

