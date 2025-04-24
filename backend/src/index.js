import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
    console.log("server is running on PORT:" + 5000);
  });