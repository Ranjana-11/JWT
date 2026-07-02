import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes)

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB connected successfully ");
  })
  .catch((err) => {
    console.log("MongoDB connection error ", err);
  });

app.get("/", (req, res) => {
  res.send("get req accepted");
})

app.listen(5000, () => {
  console.log("app is listening on port 5000");
})
