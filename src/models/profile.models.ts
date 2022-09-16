import { model, Schema } from "mongoose";
import { Character } from "../types/character.types";

const characterSchema = new Schema<Character>(
  {
    userId: { type: String, required: true },
    characterUsername: { type: String, required: true, unique: true },
    characterName: { type: String, required: true },
    characterDescription: { type: String },
  },
  { timestamps: true }
);

export const characterModel = model<Character>("Character", characterSchema);
