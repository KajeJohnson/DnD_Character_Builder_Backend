import { Request, Response } from "express";
import { usersService } from "../services/user.service";

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await usersService.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getUser(req: Request, res: Response) {
  try {
    const user = await usersService.getUser(req.params.id);
    if (!user) return res.status(404).json("User Not Found");
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function addUser(req: Request, res: Response) {
  try {
    const newUser = await usersService.addUser(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const updatedUser = await usersService.updateUser(req.params.id, req.body);
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    await usersService.deleteUser(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
