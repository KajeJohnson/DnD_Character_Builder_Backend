import { userModel } from "../models/user.model";
import { User } from "../types/user.types";

async function login(uid: string) {
  const user = await userModel.findOne({ uid });
  return user;
}

async function signup(data: Partial<User>) {
  const newUser = await userModel.create(data);
  return newUser;
}

export const authService = {
  login,
  signup,
};
