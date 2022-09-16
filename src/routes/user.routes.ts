import express from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";

export const userRouter = express.Router();

userRouter.route("/").get(getUsers).post(addUser);
userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
