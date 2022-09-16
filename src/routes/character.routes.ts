import express from "express";
import {
  addCharacter,
  deleteCharacter,
  getCharacter,
  getUserCharacters,
  updateCharacter,
} from "../controllers/character.controller";

export const characterRouter = express.Router();

characterRouter.route("/").get(getUserCharacters).post(addCharacter);
characterRouter
  .route("/:id")
  .get(getCharacter)
  .patch(updateCharacter)
  .delete(deleteCharacter);
