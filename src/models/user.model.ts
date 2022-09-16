import { model, Schema } from "mongoose";
import { User } from "../types/user.types";

const userSchema = new Schema<User>(
  {
    uid: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    displayName: { type: String, required: true },
  },
  { timestamps: true }
);

export const userModel = model<User>("User", userSchema);
