import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
// import router from './routes/organizerRoute.js';

const URI = process.env.MONGO || "mongodb://localhost:27017/event";
const app = express();
const PORT = 4000;

mongoose
  .connect(URI)
  .then(() => console.log(`Connected to Database`))
  .catch((err) => console.log(`Failed to connect to Database`));

mongoose.connection.on('error', console.log);

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server runs on Port: ${PORT}`);
});