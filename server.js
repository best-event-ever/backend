import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import organizerRouter from "./routes/organizer/organizerRoute.js";
import userRouter from "./routes/user/userRoute.js";

const URI = process.env.MONGO || "mongodb://localhost:27017/event";
const app = express();
const PORT = 4006;

mongoose
  .connect(URI)
  .then(() => console.log(`Connected to Database`))
  .catch((err) => console.log(`Failed to connect to Database`));

mongoose.connection.on("error", console.log);

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/organizer", organizerRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server runs on Port: ${PORT}`);
});
