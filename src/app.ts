import express from "express";
import healthRouter  from "./routes/healthRouter.js"


const app = express();

app.use(healthRouter);


export default app;
