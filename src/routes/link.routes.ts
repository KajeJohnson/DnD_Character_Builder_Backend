import express from "express";
import {
  addLink,
  deleteLink,
  getLink,
  getLinksByUsername,
  updateLink,
  getProfileLinks,
} from "../controllers/link.controller";

export const linkRouter = express.Router();

linkRouter.route("/").get(getProfileLinks).post(addLink);
linkRouter.route("/user").get(getLinksByUsername);
linkRouter.route("/:id").get(getLink).patch(updateLink).delete(deleteLink);
