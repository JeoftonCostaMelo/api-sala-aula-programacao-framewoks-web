import { Request, Response } from "express";
import * as characerService from "../services/characterService";

export const createCharacter = async (req: Request, res: Response) => {
    try {
        const character = await characerService.createCharacter(req.body);
        res.status(201).json(character);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export const getCharacters = async(req: Request, res: Response) => {
    const characters = await characerService.getCharacters();
    res.json(characters)
}

export const getCharacterById = async (req: Request, res: Response) => {
    const character = await characerService.getCharacterById(req.params.id);
    if(!character) return res.status(404).json({ error: "Personagem não encontrado"});
    res.json(character);
}

export const updatedCharacter = async (req: Request, res: Response) => {
    const character = await characerService.updateCharacter(req.params.id, req.body);
    if(!character) return res.status(404).json({ error: "Personagem não encontrado"});
    res.json(character);
}

export const deletedCharacter = async (req: Request, res: Response) => {
    const deleted = await characerService.deleteCharacter(req.params.id);
    if(!deleted) return res.status(404).json({ error: "Personagem não encontrado"});
    res.json({message: "Personagem Removido."});
}