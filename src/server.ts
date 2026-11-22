import express from "express";
import healthRouter from "./app.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(healthRouter);

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});