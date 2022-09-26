import { model, Schema } from "mongoose";
import { Character } from "../types/character.types";

const characterSchema = new Schema<Character>(
  {
    // userId: { type: String, required: true },
    // characterUsername: { type: String, required: true, unique: true },
    // characterName: { type: String, required: true },
    // characterDescription: { type: String },

    // _id: { type: String, required: false },
    userId: { type: String, required: false },
    characterName: { type: String, required: false },
    createdAt: { type: String, required: false },
    updatedAt: { type: String, required: false },
    class: { type: String, required: false },
    level: { type: Number, required: false },
    race: { type: String, required: false },
    alignment: { type: String, required: false },
    strength: { type: Number, required: false },
    dexterity: { type: Number, required: false },
    constitution: { type: Number, required: false },
    intelligence: { type: Number, required: false },
    wisdom: { type: Number, required: false },
    charisma: { type: Number, required: false },
    proficiencyBonus: { type: Number, required: false },
    armorClass: { type: Number, required: false },
    speed: { type: String, required: false },
    hitPoints: { type: Number, required: false },
    spells: { type: [String], required: false },
    proficiencies: { type: [String], required: false },
    languages: { type: [String], required: false },
    equipment: { type: [String], required: false },
    features: { type: [String], required: false },
    traits: { type: [String], required: false },
  },
  { timestamps: true }
);

export const characterModel = model<Character>("Character", characterSchema);
