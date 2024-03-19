import express from "express";
import router from "./routes/todoRoutes";
import cors from "cors";

const app = express();

// MIDDLEWARE for format the request body
app.use(express.json({limit: "10kb"}));

// URL Encoder
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Setup the CORS
app.use(cors({
    origin: "http://localhost:5174",
}))

// Routing
app.use("/planes", router)

export default app;

