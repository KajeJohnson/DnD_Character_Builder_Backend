import { profileModel } from "../models/profile.models";
import { Character } from "../types/character.types";

async function getCharacters() {
  const characters = await characterModel.find().lean();
  return characters;
}

async function getUserCharacters(userId: string) {
  const characters = await characterModel
    .find({ userId })
    .sort({ createdAt: "desc" })
    .lean();
  return characters;
}

async function getCharacter(id: string) {
  const charater = await characterModel.findById(id).lean();
  return character;
}

async function addCharacter(data: Partial<Character>) {
  const newCharacter = await characterModel.create(data);
  return newCharacter;
}

async function updateCharacter(id: string, data: Partial<Character>) {
  const updatedCharacter = await characterModel
    .findByIdAndUpdate(id, data, {
      new: true,
    })
    .lean();
  return updatedCharacter;
}

async function deleteCharacter(id: string) {
  return await characterModel.findByIdAndDelete(id);
}

export const characterService = {
  getCharacters,
  getUserCharacters,
  getCharacter,
  addCharacter,
  updateCharacter,
  deleteCharacter,
};
