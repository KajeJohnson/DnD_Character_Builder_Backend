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
    class: { type: Object, required: false },
    level: { type: Number, required: false },
    race: { type: Object, required: false },
    alignment: { type: Object, required: false },
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
    spells: { type: [Object], required: false },
    proficiencies: { type: [Object], required: false },
    languages: { type: [Object], required: false },
    equipment: { type: [Object], required: false },
    features: { type: [Object], required: false },
    traits: { type: [Object], required: false },
  },
  { timestamps: true }
);

export const characterModel = model<Character>("Character", characterSchema);
