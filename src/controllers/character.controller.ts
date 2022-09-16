import { Request, Response } from "express";
import { characterService } from "../services/character.service";

export async function getCharacters(req: Request, res: Response) {
  try {
    const characters = await characterService.getCharacters();
    return res.status(200).json(characters);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getUserCharacters(req: Request, res: Response) {
  try {
    const links = await characterService.getUserCharacters(
      req.query.userId as string
    );
    return res.status(200).json(links);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function getCharacter(req: Request, res: Response) {
  try {
    const character = await characterService.getCharacter(req.params.id);
    if (!character)
      return res
        .status(404)
        .json("The character ye be lookin' for ain't found in these regions!");
    return res.status(200).json(character);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function addCharacter(req: Request, res: Response) {
  try {
    const newCharacter = await characterService.addCharacter(req.body);
    return res.status(201).json(newCharacter);
  } catch (error: any) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json({
        message:
          "Ye can't be stealin' this traveller's name! Argh, come up with yer own!",
        type: "DuplicateKey",
      });
    }
    return res.status(500).json(error);
  }
}

export async function updateCharacter(req: Request, res: Response) {
  try {
    const updatedCharacter = await characterService.updateCharacter(
      req.params.id,
      req.body
    );
    return res.status(200).json(updatedCharacter);
  } catch (error: any) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(400).json({
        message:
          "Ye can't be stealin' this traveller's name! Argh, come up with yer own!",
        type: "DuplicateKey",
      });
    }
    return res.status(500).json(error);
  }
}

export async function deleteCharacter(req: Request, res: Response) {
  try {
    await characterService.deleteCharacter(req.params.id);
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
