import express from "express";
import {
  addProfile,
  deleteProfile,
  getProfile,
  getProfileByUsername,
  getUserProfiles,
  updateProfile,
} from "../controllers/profile.controller";

export const profileRouter = express.Router();

profileRouter.route("/").get(getUserProfiles).post(addProfile);
profileRouter.route("/user").get(getProfileByUsername);
profileRouter
  .route("/:id")
  .get(getProfile)
  .patch(updateProfile)
  .delete(deleteProfile);
