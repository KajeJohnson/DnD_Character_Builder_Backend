import cors from "cors";

import express from "express";
import mongoose from "mongoose";
import { config } from "./config";
import { authRouter } from "./routes/auth.routes";
import { linkRouter } from "./routes/link.routes";
import { profileRouter } from "./routes/profile.routes";
import { userRouter } from "./routes/user.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/profiles", profileRouter);
app.use("/links", linkRouter);

mongoose
  .connect(config.mongoUri)
  .then(() => console.log("Connected to MongoDB"));

const port = config.port;

app.listen(port, () => console.log(`Listening on port: ${port}.`));
