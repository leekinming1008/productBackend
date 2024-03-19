import express from "express";
import router from "./routes/todoRoutes";
import cors from "cors";

const app = express();

// MIDDLEWARE for format the request body
app.use(express.json({limit: "10kb"}));

// URL Encoder
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Setup the CORS
var allowlist = ["http://localhost:5174", "https://angusproductmanagement.netlify.app/"];

app.use(cors({
    origin: "http://localhost:5174, https://angusproductmanagement.netlify.app/",
}))

// Routing
app.use("/planes", router)

// get to the home page
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Our Express Server");
})

export default app;

