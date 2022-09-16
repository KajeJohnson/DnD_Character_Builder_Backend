import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
// app.use('/auth', authRouter);
// app.use('/users', userRouter);
// app.use('/profiles', profileRouter);
// app.use('/links', linkRouter);

// Setup mongoose mongodb connection
mongoose
  .connect(config.mongoUri)
  .then(() => console.log("Connected to MongoDB"));

const port = config.port;

app.listen(port, () => console.log(`Listening on port: ${port}.`));
